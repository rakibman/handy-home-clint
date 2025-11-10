import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const { signInWithGoogle, signInUser } = useContext(AuthContext);
  const handelGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("login success!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handelEmailLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, password });
    signInUser(email, password)
      .then(() => {
        toast.success("login success");
        navigate("/");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          toast.error("Invalid email address!");
        } else if (error.code === "auth/user-disabled") {
          toast.error("This account has been disabled.");
        } else if (error.code === "auth/user-not-found") {
          toast.error("No user found with this email.");
        } else if (error.code === "auth/invalid-credential") {
          toast.error("Incorrect password. Try again.");
        } else if (error.code === "auth/email-already-in-use") {
          toast.error("This email is already registered.");
        } else if (error.code === "auth/weak-password") {
          toast.error("Password should be at least 6 characters.");
        } else if (error.code === "auth/network-request-failed") {
          toast.error("Network error. Check your internet connection.");
        } else if (error.code === "permission-denied") {
          toast.error("You don’t have permission for this action.");
        } else if (error.code === "unavailable") {
          toast.error("Server unavailable. Try again later.");
        } else if (error.code === "storage/unauthorized") {
          toast.error("You are not authorized to upload this file.");
        } else if (error.code === "storage/canceled") {
          toast.error("Upload canceled.");
        } else {
          toast.error("Unknown error: " + error.message);
        }
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 to-blue-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Handy<span className="text-gray-800">Home</span> Login
        </h2>

        {/* Login Form */}
        <form onSubmit={handelEmailLogin} className="space-y-3">
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

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-500" />
              Remember me
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-200"
          >
            Log In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center my-5">
          <div className="h-px w-1/3 bg-gray-300"></div>
          <span className="mx-3 text-gray-500 text-sm">or</span>
          <div className="h-px w-1/3 bg-gray-300"></div>
        </div>

        {/* Social Login */}
        <button
          onClick={handelGoogleSignIn}
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
          <Link to={"/register"} className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
