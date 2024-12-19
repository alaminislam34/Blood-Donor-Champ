import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../ContextProvider/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import feedback from "../assets/feedback.json";
import userImage from "../assets/user.jpg";
import { BiSolidLike } from "react-icons/bi";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";

const Reviews = () => {
  const { theme, user, setLoader } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      reviews: "",
    },
  });

  useEffect(() => {
    fetchReviews();
  }, []);

  // Fetch all reviews
  const fetchReviews = async () => {
    try {
      const result = await axios.get(
        "https://blood-donation-server-ar.vercel.app/donor-reviews"
      );
      setReviews(result.data);
    } catch (error) {
      console.error("Failed to fetch reviews:", error);
    }
  };

  // Handle like count
  const handleLike = async (id) => {
    const userEmail = user?.email;
    const review = reviews.find((re) => re._id === id);

    // If already liked, return
    if (review && review.likedBy.includes(userEmail)) {
      return;
    } else if (!user) {
      navigate("/login");
    } else {
      try {
        // Update like count and likedBy
        const result = await axios.patch(
          `https://blood-donation-server-ar.vercel.app/donor-reviews/${id}`,
          { userEmail }
        );
        // Update local state to reflect changes immediately
        setReviews((prevReviews) =>
          prevReviews.map((re) =>
            re._id === id
              ? {
                  ...re,
                  likeCount: re.likeCount + 1,
                  likedBy: [...re.likedBy, userEmail],
                }
              : re
          )
        );
      } catch (error) {
        console.error("Failed to like the review:", error);
      }
    }
  };

  // Handle donor reviews submission
  const handleReviews = async (data) => {
    const { email, displayName, photoURL } = user || [];
    const likeCount = 0;
    const likedBy = []; // Initially empty
    const userInfo = { email, displayName, photoURL, likeCount, likedBy };
    if (user) {
      try {
        const result = await axios.post(
          "https://blood-donation-server-ar.vercel.app/donor-reviews",
          { ...data, ...userInfo }
        );
        if (result.data.insertedId) {
          Swal.fire({
            title: "ধন্যবাদ",
            text: "আপনার গুরুত্বপূর্ণ মতামতের জন্য",
            icon: "success",
            confirmButtonText: "আচ্ছা",
          });
          reset();
          fetchReviews();
        }
      } catch (error) {
        console.error("Failed to submit review:", error);
      }
    } else {
      toast("কমেন্ট করতে লগইন করুন!");
    }
  };

  // handle comment delete
  const handleDeleteComment = (id) => {
    axios
      .delete(`https://blood-donation-server-ar.vercel.app/donor-reviews/${id}`)
      .then(() => {
        toast("আপনার কমেন্ট ডিলিট হয়েছে");
        const remainingComments = reviews.filter((re) => re._id !== id);
        setReviews(remainingComments);
      });
  };

  return (
    <div className="flex flex-col items-center h-full py-12">
      <div className="mb-4 w-full">
        <h2
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200"
          className="font-poppins text-2xl md:text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-pink-400 to-red-600 bg-clip-text text-transparent py-4 flex flex-row gap-2 items-center justify-center"
        >
          আপনাদের গুরুত্বপূর্ণ মতামত
        </h2>
      </div>
      {/* Display review */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 w-11/12 mx-auto my-6 lg:my-8">
        {reviews.map((review) => (
          <div
            data-aos="zoom-in-up"
            data-aos-delay="500"
            data-aos-duration="1500"
            key={review._id}
            className="p-2 md:p-3 rounded-lg shadow-md border"
          >
            <div>
              <img
                className="w-16 object-cover rounded-full"
                src={userImage}
                alt={review.displayName || "User"}
              />
            </div>
            <div className="space-y-1.5 lg:space-y-2">
              <h3 className="text-[15px] sm:text-base md:text-lg font-semibold">
                নাম: {review.name || review.displayName}
              </h3>
              <p className="text-sm lg:text-base">{review.reviews}</p>
              <div className="px-2 flex justify-between items-center">
                <button
                  onClick={() => handleLike(review._id)}
                  disabled={review.likedBy.includes(user?.email)} // Disable if already liked
                  className={`flex flex-row items-center gap-2 text-xl ${
                    review.likedBy.includes(user?.email)
                      ? "text-red-500"
                      : "text-gray-500"
                  }`}
                >
                  <BiSolidLike /> <span>{review.likeCount}</span>
                </button>
                {review?.email === user?.email && (
                  <button
                    onClick={() => handleDeleteComment(review._id)}
                    className="py-1 px-2 rounded-lg text-xs md:text-sm"
                  >
                    ডিলিট
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Reviews form */}
      <section className=" mt-6 pt-4">
        <div className="sm:col-span-2 space-y-2 md:space-y-4 my-4 md:my-6 text-center w-11/12 md:w-8/12 mx-auto">
          <h3
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="700"
            data-aos-duration="1500"
            className="text-xl sm:text-2xl md:text-3xl font-medium"
          >
            এখানে আপনার মূল্যবান মতামত প্রকাশ করুন
          </h3>
          <p
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="1100"
            data-aos-duration="1500"
          >
            এখানে আপনি আপনার মতামত প্রকাশ করতে পারবেন । আপনি চাইলে আপনার করা
            কমেন্ট ডিলিটও করতে পারবেন । আশা করি আপনি আপনার মতামত এখানে কমেন্ট
            করে সবাইকে জানিয়ে দিবেন।{" "}
          </p>
        </div>
        <div
          className={`flex flex-col rounded-lg overflow-hidden ${
            theme === "light" ? "" : ""
          } md:flex-row-reverse items-center *:flex-1 w-11/12 sm:w-10/12 mx-auto`}
        >
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="1100"
            data-aos-duration="1200"
            className={`${theme === "light" ? "" : " "}`}
          >
            <Lottie animationData={feedback}></Lottie>
          </div>
          <div className="h-full w-full">
            <form
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="1500"
              data-aos-duration="1500"
              onSubmit={handleSubmit(handleReviews)}
              className={`flex flex-col gap-4 p-4 lg:p-6 py-6 lg:py-12 h-full rounded-lg ${
                theme === "light"
                  ? "bg-gradient-to-tr from-red-100 to-red-200"
                  : "bg-gradient-to-br from-[#f74747] to-[#701c1c]"
              }`}
            >
              <div className="flex flex-col gap-1">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center my-2">
                  কমেন্ট করুন
                </h3>
                <label htmlFor="name">আপনার নাম</label>
                <input
                  type="text"
                  placeholder="আপনার নাম"
                  className="py-1.5 lg:py-2 px-3 lg:px-4 rounded-lg"
                  {...register("name", { required: "আপনার নাম লিখুন" })}
                />
                {errors.name && (
                  <span
                    className={` text-xs ${
                      theme === "light" ? "text-red-500" : "text-gray-400"
                    }`}
                  >
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="reviews">কমেন্ট লিখুন</label>
                <textarea
                  rows={5}
                  cols={5}
                  placeholder="এখানে আপনার কমেন্ট লিখুন..."
                  className="py-1.5 lg:py-2 px-3 lg:px-4 rounded-lg"
                  {...register("reviews", {
                    required: "আপনাকে সর্বোনিম্ন ৫ শব্দের কমেন্ট করতে হবে.",
                    validate: (value) => {
                      const wordCount = value.trim().split(/\s+/).length;
                      if (wordCount < 5) {
                        return "আপনাকে সর্বোনিম্ন ৫ শব্দের কমেন্ট করতে হবে.";
                      } else if (wordCount > 20) {
                        return "আপনি সর্বোচ্চ ২০ শব্দের কমেন্ট করতে পারবেন.";
                      }
                      return true;
                    },
                  })}
                ></textarea>
                {errors.reviews && (
                  <span
                    className={` text-xs ${
                      theme === "light" ? "text-red-500" : "text-gray-400"
                    }`}
                  >
                    {errors.reviews.message}
                  </span>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className={`text-lg font-bold py-1.5 lg:py-2 mt-4 rounded-lg w-full ${
                    theme === "light"
                      ? "bg-gradient-to-r from-red-400 to-pink-400"
                      : "bg-gradient-to-r from-red-300 to-pink-300 text-red-500"
                  }`}
                >
                  কমেন্ট রিভিউ
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Reviews;
