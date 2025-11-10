import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, setUser, updateUser, user } = useContext(AuthContext);
  const handelRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/;
    // if (password.length < 5) {
    //   console.log('dfkjdfhksdfjhkdsjf');
    //   return;
    // }
    createUser(email, password)
      .then((res) => {
        setUser(res.user);
        toast.success("signUp susses");
        updateUser({ displayName: name, photoURL: photo });
        setUser({
          ...user,
          displayName: name,
          photoURL: photo,
        });
        navigate("/login");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 to-blue-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
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
