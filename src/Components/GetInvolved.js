import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // Adjust the path if necessary
import { HeartIcon, UserGroupIcon, BanknotesIcon } from '@heroicons/react/24/outline';

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Thank you for your interest! We will get back to you soon.');
     // Clear the form fields
     setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar/>
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-extrabold text-center mb-8">Get Involved</h1>

        {/* Volunteer Section */}
        <div className="bg-teal-100 p-8 rounded-lg shadow-lg mb-12">
          <div className="text-center mb-6">
            <UserGroupIcon className="w-16 h-16 text-teal-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">Become a Volunteer</h2>
            <p className="text-lg text-gray-700">Join us in making a difference! Your time and skills can help transform lives.</p>
          </div>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                rows="4"
                required
              />
            </div>
            <button type="submit" className="px-6 py-3 text-white bg-teal-600 rounded-md shadow-md hover:bg-teal-700 transition-colors">Submit</button>
          </form>
        </div>

        {/* Donation Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
          <div className="lg:w-1/2 p-8 bg-teal-100 rounded-lg shadow-lg">
            <div className="text-center mb-6">
              <HeartIcon className="w-16 h-16 text-teal-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">Make a Donation</h2>
              <p className="text-lg text-gray-700">Your generous donations support our initiatives and help us reach more people in need.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Impact of Your Donation</h3>
              <ul className="list-disc list-inside mb-4 text-gray-700">
                <li>$50 provides school supplies for a student.</li>
                <li>$100 funds a month of after-school tutoring.</li>
                <li>$500 supports a full scholarship for a year.</li>
              </ul>
              <button className="px-6 py-3 text-white bg-teal-600 rounded-md shadow-md hover:bg-teal-700 transition-colors">Donate Now</button>
            </div>
          </div>

          {/* Donation Options */}
          <div className="lg:w-1/2 p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Donation Options</h2>
            <p className="text-lg text-gray-700 mb-4">Choose a donation method that suits you:</p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center">
                <BanknotesIcon className="w-6 h-6 text-teal-600 mr-4" />
                <span>Online Payment</span>
              </div>
              <div className="flex items-center">
                <BanknotesIcon className="w-6 h-6 text-teal-600 mr-4" />
                <span>Bank Transfer</span>
              </div>
              <div className="flex items-center">
                <BanknotesIcon className="w-6 h-6 text-teal-600 mr-4" />
                <span>Mail a Check</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInvolved;
