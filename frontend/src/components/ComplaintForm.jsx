import React, { useState } from "react";
import axios from "axios";

const ComplaintForm = () => {
  // Form state for controlled inputs
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    status: "pending",
    description: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      await axios.post(
        'http://localhost:5001/api/complaints',
        formData,
        { headers: { Authorization: `Bearer ${storedUser?.token}` } }
      );
      setFormData({
        name: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        status: "pending",
        description: "",
      });
      alert('Complaint submitted successfully!');
    } catch (error) {
      console.error('Error submitting complaint:', error);
      alert('Error submitting complaint. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-200">
      {/* Navbar */}
      <header className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span>Hi, User</span>
          <nav className="space-x-4">
            <a href="#complaint-register" className="hover:text-indigo-400">Complaint Register</a>
            <a href="#status" className="hover:text-indigo-400">Status</a>
          </nav>
        </div>
        <button className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700">LogOut</button>
      </header>

      {/* Form Section */}
      <main className="flex-grow flex items-center justify-center">
        <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-600 rounded-md bg-gray-700 text-white py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="address" className="block text-sm font-medium text-gray-300">Address</label>
              <input
                type="text"
                id="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-600 rounded-md bg-gray-700 text-white py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="city" className="block text-sm font-medium text-gray-300">City</label>
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-600 rounded-md bg-gray-700 text-white py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="state" className="block text-sm font-medium text-gray-300">State</label>
              <input
                type="text"
                id="state"
                value={formData.state}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-600 rounded-md bg-gray-700 text-white py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="pincode" className="block text-sm font-medium text-gray-300">Pincode</label>
              <input
                type="text"
                id="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-600 rounded-md bg-gray-700 text-white py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="status" className="block text-sm font-medium text-gray-300">Status</label>
              <input
                type="text"
                id="status"
                value={formData.status}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-600 rounded-md bg-gray-700 text-white py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-300">Description</label>
            <textarea
              id="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="mt-1 block w-full border border-gray-600 rounded-md bg-gray-700 text-white py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Register
          </button>
        </form>
      </main>

    </div>
  );
};

export default ComplaintForm;
