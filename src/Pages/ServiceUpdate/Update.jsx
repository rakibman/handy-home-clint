import React from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate, useParams } from "react-router";

const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = useLoaderData();
  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      provider_email: e.target.email.value,
      price: Number(e.target.price.value),
      service_Name: e.target.service_name.value,
      category: e.target.category.value,
      description: e.target.description.value,
      thumbnail: e.target.thumbnail.value,
      created_at: new Date(),
      Review: 0,
    };

    fetch(`https://handy-home-server.vercel.app/services/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(() => {
        toast.success("Successfully updated!");
        navigate("/services");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="card border border-gray-200 bg-base-100 w-full  mx-auto shadow-2xl rounded-2xl">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">
          Update Your Services
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div className="grid grid-cols-3 gap-5">
            {/* Name Field */}
            <div>
              <label className="label py-3 font-medium">
                Service Provider Name
              </label>
              <input
                defaultValue={data.name}
                type="text"
                name="name"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter Your Name"
              />
            </div>
            {/* Service Field */}
            <div>
              <label className="label py-3 font-medium">Service Name</label>
              <input
                defaultValue={data.service_Name}
                type="text"
                name="service_name"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter Your service name"
              />
            </div>
            {/* Price Field */}
            <div>
              <label className="label py-3 font-medium">Service Price</label>
              <input
                defaultValue={data.price}
                type="text"
                name="price"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter Your service Price"
              />
            </div>

            {/* Category Dropdown */}
            <div>
              <label className="label py-3 font-medium">Category</label>
              <select
                defaultValue={data.category}
                name="category"
                required
                className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
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
              <label className="label py-3 font-medium">Thumbnail URL</label>
              <input
                defaultValue={data.thumbnail}
                type="url"
                name="thumbnail"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="https://example.com/image.jpg"
              />
            </div>
            {/* Provider Email */}
            <div>
              <label className="label py-3 font-medium">Provider Email</label>
              <input
                defaultValue={data.provider_email}
                type="email"
                name="email"
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="abc@gmail.com"
              />
            </div>
          </div>
          {/* Description Textarea */}
          <div>
            <label className="label py-3 font-medium">Description</label>
            <textarea
              defaultValue={data.description}
              name="description"
              required
              rows="3"
              className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[100px]"
              placeholder="Enter description"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
