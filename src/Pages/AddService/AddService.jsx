import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const AddService = () => {
  const { user } = useContext(AuthContext);
  const handelAddModel = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      provider_email: user?.email,
      price: Number(e.target.price.value),
      service_Name: e.target.service_name.value,
      category: e.target.category.value,
      description: e.target.description.value,
      thumbnail: e.target.thumbnail.value,
      created_at: new Date(),
      Review: Number(0),
    };
    fetch("https://handy-home-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("successfully added!");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      className="card bg-[linear-gradient(10deg,#a3bffa,#6b82f4)]
            dark:bg-[linear-gradient(135deg,#1e2a4f,#0f1830)]
            p-6
            text-gray-800 dark:text-white w-full  mx-auto shadow-2xl rounded-2xl"
    >
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">
          Add Your Service
        </h2>
        <form onSubmit={handelAddModel} className="space-y-4  dark:text-black">
          <div className="grid grid-cols-3 gap-5">
            {/* Name Field */}
            <div>
              <label className="label py-3 font-medium dark:text-white">
                Service Provider Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200 bg-white/40"
                placeholder="Enter Your Name"
              />
            </div>
            {/* Service Field */}
            <div>
              <label className="label py-3 font-medium dark:text-white">
                Service Name
              </label>
              <input
                type="text"
                name="service_name"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200 bg-white/40"
                placeholder="Enter Your service name"
              />
            </div>
            {/* Price Field */}
            <div>
              <label className="label py-3 font-medium dark:text-white">
                Service Price
              </label>
              <input
                type="text"
                name="price"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200 bg-white/40"
                placeholder="Enter Your service Price"
              />
            </div>

            {/* Category Dropdown */}
            <div>
              <label className="label py-3 font-medium dark:text-white">
                Category
              </label>
              <select
                defaultValue={""}
                name="category"
                required
                className="select w-full rounded-full focus:border-0 focus:outline-gray-200 bg-white/40"
              >
                <option value="" disabled>
                  Select category
                </option>
                <option value="Cleaning & Maintenance">
                  Cleaning & Maintenance
                </option>
                <option value="Electrical & Appliances">
                  Electrical & Appliances
                </option>
                <option value="Plumbing">Plumbing</option>
                <option value="Beauty & Grooming">Beauty & Grooming</option>
                <option value="Gardening">Gardening</option>
                <option value="Laundry & Ironing">Laundry & Ironing</option>
                <option value="Home Painting">Home Painting</option>
                <option value="Home Improvement">Home Improvement</option>
                <option value="Vehicle Services (at Home)">
                  Vehicle Services (at Home)
                </option>
                <option value="Emergency Services">Emergency Services</option>
              </select>
            </div>
            {/* Thumbnail URL */}
            <div>
              <label className="label py-3 font-medium dark:text-white">
                Thumbnail URL
              </label>
              <input
                type="url"
                name="thumbnail"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200 bg-white/40"
                placeholder="https://example.com/image.jpg"
              />
            </div>
            {/* Provider Email */}
          </div>
          {/* Description Textarea */}
          <div>
            <label className="label py-3 font-medium dark:text-white">
              Description
            </label>
            <textarea
              name="description"
              required
              rows="3"
              className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[100px] bg-white/40"
              placeholder="Enter description"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-2 rounded-full font-semibold
                   bg-linear-to-r from-pink-500 to-purple-600
                   dark:from-pink-600 dark:to-purple-700
                   text-white hover:from-pink-500 hover:to-purple-600
                   transition"
          >
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
