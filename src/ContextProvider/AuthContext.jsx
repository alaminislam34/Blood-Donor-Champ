import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
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
            await axios.post(
              "https://blood-donation-server-ar.vercel.app/logout",
              {},
              { withCredentials: true }
            );
          } else {
            const { displayName, email, emailVerified, uid, photoURL } =
              currentUser;

            //  / Prepare FormData
            const formData = new FormData();
            formData.append("email", email);
            formData.append("photoURL", photoURL);
            formData.append("displayName", displayName);
            formData.append("emailVerified", emailVerified);
            formData.append("uid", uid);

            axios
              .post(
                "https://blood-donation-server-ar.vercel.app/users",
                formData,
                {
                  withCredentials: true,
                }
              )
              .then((res) => {});

            setUser(currentUser);
            setLoading(false);
          }
        } catch (error) {
          console.error("Error during authentication:", error);
          setUser(null);
          setLoading(false);
        }
      } else {
        setUser(null);
        setLoading(false);
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
