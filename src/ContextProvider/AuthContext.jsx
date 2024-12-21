import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState(null);
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(true);
  const [loader, setLoader] = useState(false);
  const [isDonar, setIsDonar] = useState(false);

  //   state handle
  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true);

      if (currentUser) {
        try {
          // Reload user for the latest verification update
          await currentUser.reload();

          if (!currentUser.emailVerified) {
            await signOut(auth);
            setUser(null);
            setLoading(false);

            // Logout request
          } else {
            const userEmail = { email: currentUser?.email };
            axios
              .post(`${import.meta.env.VITE_URL}/jwt`, userEmail, {
                withCredentials: true,
              })
              .then(() => {})
              .catch((error) => console.log(error));

            setUser(currentUser);
            setLoading(false);
          }
        } catch (error) {
          console.error("Error during authentication:", error);
          setUser(null);
          setLoading(false);
        }
      } else {
        await axios
          .post(
            `${import.meta.env.VITE_URL}/logout`,
            {},
            { withCredentials: true }
          )
          .then(() => {
            {
              setUser(null);
              setLoading(false);
            }
          });
      }
    });

    return () => subscribe();
  }, []);

  //   context value
  const info = {
    user,
    setUser,
    setAuthError,
    authError,
    theme,
    setTheme,
    loading,
    navigation,
    loader,
    setLoader,
    isDonar,
    setIsDonar,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
