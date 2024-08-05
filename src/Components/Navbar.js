import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      easing: 'ease-in', // Easing function
      once: false, // Whether animation should happen only once
    });
  }, []);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 text-white shadow-md z-50" data-aos="fade-down">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link to="/" onClick={scrollToTop}>EduEmpower Initiative</Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => {
              setMobileMenuOpen(!isMobileMenuOpen);
              scrollToTop(); // Scroll to the top when toggling the mobile menu
            }}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
        <div
          className={`lg:flex lg:space-x-4 absolute lg:relative inset-x-0 top-full lg:top-auto lg:bg-transparent lg:opacity-100 lg:flex lg:items-center lg:space-x-4 lg:mt-0 ${isMobileMenuOpen ? 'block bg-black bg-opacity-70 opacity-100' : 'hidden'}`}
        >
          <Link to="/about" className="block py-2 px-4 hover:text-teal-400" onClick={scrollToTop}>About Us</Link>
          <Link to="/projects" className="block py-2 px-4 hover:text-teal-400" onClick={scrollToTop}>Projects</Link>
          <Link to="/get-involved" className="block py-2 px-4 hover:text-teal-400" onClick={scrollToTop}>Get Involved</Link>
          <Link to="/events" className="block py-2 px-4 hover:text-teal-400" onClick={scrollToTop}>Events</Link>
          <Link to="/blog" className="block py-2 px-4 hover:text-teal-400" onClick={scrollToTop}>Blogs</Link>
          <Link to="/contact" className="block py-2 px-4 hover:text-teal-400" onClick={scrollToTop}>Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
