import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, setUser, updateUserProfile, user } =
    useContext(AuthContext);
  const handelRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 6 characters, include uppercase, lowercase, and a special character"
      );
      return;
    }
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Register success!");
        updateUserProfile({ displayName: name, photoURL: photo });
        setUser({ ...user, displayName: name, photoURL: photo });
        navigate("/");
      })
      .catch((err) => {
        const code = err.code;
        if (code === "auth/email-already-in-use") {
          toast.error("This email is already registered.");
        } else if (code === "auth/invalid-email") {
          toast.error("Invalid email format.");
        } else if (code === "auth/weak-password") {
          toast.error("Password should be at least 6 characters.");
        } else if (code === "auth/missing-password") {
          toast.error("Please enter your password.");
        } else if (code === "auth/user-not-found") {
          toast.error("No account found with this email.");
        } else if (code === "auth/wrong-password") {
          toast.error("Incorrect password.");
        } else if (code === "auth/network-request-failed") {
          toast.error("Network error. Please check your connection.");
        } else if (code === "auth/too-many-requests") {
          toast.error("Too many attempts. Try again later.");
        } else if (code === "auth/invalid-value-(display-name)") {
          toast.error("Invalid profile name.");
        } else {
          toast.error("Something went wrong. Please try again.");
        }

        console.error("Firebase Error:", err);
      });
  };
  return (
    <div className="shadow-2xl flex items-center justify-center ">
      <div className="w-full max-w-md rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Handy<span className="text-gray-800">Home</span> Login
        </h2>

        {/* Login Form */}
        <form onSubmit={handelRegister} className="space-y-2">
          {/* name  */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>
          {/* photo url  */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your Photo"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>
          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 my-2 rounded-lg hover:bg-blue-700 transition-all duration-200"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center my-2">
          <div className="h-px w-1/3 bg-gray-300"></div>
          <span className="mx-3 text-gray-500 text-sm">or</span>
          <div className="h-px w-1/3 bg-gray-300"></div>
        </div>

        {/* Social Login */}
        <button
          //   onClick={handelGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span>Continue with Google</span>
        </button>

        {/* Sign Up link */}
        <p className="text-center text-gray-600 mt-6 text-sm">
          Don’t have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
