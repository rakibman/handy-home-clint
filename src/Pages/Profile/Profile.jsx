import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  if(!user){
    return <p>loading...</p>
  }
  return (
    <div className="flex gap-20 p-3 max-w-[900px] mx-auto ">
      <div className="w-1/2 profile-bg px-3 py-3 rounded-xl">
          <img className="my-5 mx-auto rounded-full" src={user?.photoURL} alt="" />
        
        <div className="text-center">
          <h1>{user?.displayName}</h1>
          <p>{user?.email}</p>
        </div>
      </div>
      <div className="w-1/ profile-bg-2 px-3 py-3 rounded-xl">
        <h1 className="text-3xl text-center font-semibold py-3">Update Profile</h1>
        <form  className="space-y-2">
          {/* name  */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="md:w-[400px] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
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
              className="md:w-[400px] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
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
      </div>
    </div>
  );
};

export default Profile;
