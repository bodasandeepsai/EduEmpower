import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Navbar from './Navbar'; // Adjust the path if necessary


const ContactUs = () => {
  return (
    <>
      <Navbar />

      <div className="container bg-teal-200 mx-auto p-6 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">We’d love to hear from you. Feel free to reach out using the form below or visit us at our location.</p>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-teal-300 p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Your Email" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea id="message" className="w-full p-3 border border-gray-300 rounded-lg" rows="4" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="bg-teal-700 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Send Message</button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Our Contact Details</h2>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-teal-500 text-2xl mr-4" />
              <p className="text-gray-700">Vit vellore, katpadi, vellore. tamilnadu,India</p>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone className="text-teal-500 text-2xl mr-4" />
              <p className="text-gray-700">+91 8179240053</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-teal-500 text-2xl mr-4" />
              <p className="text-gray-700">contact@eduempower.org</p>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="w-full h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.091223057388!2d-122.08706568468065!3d37.386051979825325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7d5c9c74d7f%3A0x3fe042b4aa2eb9c0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1633054478300!5m2!1sen!2sus"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
