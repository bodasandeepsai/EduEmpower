import React, { useRef, useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // Adjust the path if necessary
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { AcademicCapIcon, GlobeAltIcon, HandThumbUpIcon } from '@heroicons/react/24/outline';
import hero1 from '../hero1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';



const LandingPage = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const videoRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 500, easing: 'ease-in', once: false });
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (email) {
      // You can replace this with actual form submission logic
      alert(`Thank you for subscribing with ${email}!`);
      setEmail(''); // Clear the input field
    } else {
      alert('Please enter a valid email address.');
    }
  };


  return (
    <div className="relative overflow-hidden bg-gray-900 text-white">
      {/* Navigation Bar */}
      <Navbar />
      {/* Hero Section */}
      <div className="relative pt-20 overflow-hidden bg-gradient-to-r from-teal-500 to-blue-600 text-white">
        <div className="relative px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="absolute inset-0 overflow-hidden" data-aos="zoom-out">
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              interval={5000}
              className="object-cover w-full h-full opacity-60"
            >
              <div>
                <img src={hero1} alt="Hero Background 1" className="w-full h-full object-cover" />
              </div>
              <div>
                <img src="https://media.istockphoto.com/id/1148219711/photo/bored-students-in-classroom.jpg?s=612x612&w=0&k=20&c=cAFw_rCAv7Ikg7QRpx8Q6rVRjCjhyiL0ZiKbjJLjxOw=" alt="Hero Background 2" className="w-full h-full object-cover" />
              </div>
              <div>
                <img src="https://media.istockphoto.com/id/477633485/photo/team-of-successful-university-graduates-raising-their-convocation-caps.jpg?s=612x612&w=0&k=20&c=Cg9aAKKOFJkukureA3hzdnXin42O-GCBP60b4h5CLic=" alt="Hero Background 3" className="w-full h-full object-cover" />
              </div>
            </Carousel>
            <div className="absolute inset-0 bg-black opacity-40" aria-hidden="true"></div>
          </div>
          <div className="relative flex flex-col items-center justify-center text-center" data-aos="fade-up">
            <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl leading-tight drop-shadow-md">
              Empowering Futures Through <span className="text-green-300">Education</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl leading-relaxed">
              Join us in providing quality education and opportunities to those in need.
            </p>
            <div className="mt-8 flex justify-center">
              <Link to="/about" className="px-8 py-4 text-lg font-semibold text-white bg-white-500 rounded-md shadow-md hover:bg-green-500 transition duration-300 ease-in-out" data-aos="slide-right" onClick={handleScrollToTop}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Banner */}
      <div className="relative bg-gradient-to-r from-teal-400 to-teal-100 py-6 overflow-hidden mt-10">
        <div className="absolute inset-0 opacity-50">
          <svg className="absolute top-0 left-0 w-full h-full text-teal-700" fill="currentColor" viewBox="0 0 200 200" preserveAspectRatio="none">
            <path d="M0 0h200v200H0z" />
            <path d="M0 0l200 200M200 0l-200 200" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">Our Core Values</h2>
            <p className="mt-4 text-lg text-gray-200">Commitment to Learning, Inclusivity, and Empowerment.</p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center bg-white bg-opacity-10 p-6 rounded-lg shadow-lg" data-aos="fade-right">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-500 text-white">
                  <AcademicCapIcon className="w-8 h-8" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">Learning</h3>
                <p className="mt-2 text-gray-200">Fostering a culture of continuous learning and growth.</p>
              </div>
              <div className="flex flex-col items-center text-center bg-white bg-opacity-10 p-6 rounded-lg shadow-lg" data-aos="fade-up">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-500 text-white">
                  <GlobeAltIcon className="w-8 h-8" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">Inclusivity</h3>
                <p className="mt-2 text-gray-200">Creating an inclusive environment where everyone feels valued.</p>
              </div>
              <div className="flex flex-col items-center text-center bg-white bg-opacity-10 p-6 rounded-lg shadow-lg" data-aos="fade-left">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-500 text-white">
                  <HandThumbUpIcon className="w-8 h-8" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">Empowerment</h3>
                <p className="mt-2 text-gray-200">Empowering individuals to reach their full potential.</p>
              </div>
            </div>
            <div className="mt-12 flex justify-center">
              <Link to="/projects" className="px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-md shadow-md hover:bg-green-600" onClick={handleScrollToTop} data-aos="slide-right" >Explore Our Projects</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Get Involved Section */}
      <div className="relative bg-gray-800 py-16 mt-16 overflow-hidden">
        <div className="absolute inset-0">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="url(#pattern)" fillOpacity=".1" d="M317.721 201.443C422.204 159.045 540.673 140 671.703 140c128.122 0 251.252 20.855 366.29 59.135v498.564H0V320.49C115.057 281.219 237.184 260 363.455 260c128.412 0 246.322 11.84 354.266 41.443z" />
            <defs>
              <pattern id="pattern" x="0" y="0" width=".135" height=".24" patternUnits="userSpaceOnUse">
                <path d="M2 0h1v2H2z" fill="#ffffff" />
              </pattern>
            </defs>
          </svg>
        </div>
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">Get Involved</h2>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">Explore the diverse ways you can contribute to our mission and make a real difference.</p>
          </div>

          <div className="mt-12 flex justify-center relative">
            <div className="relative overflow-hidden bg-gray-700 p-8 rounded-lg shadow-lg transform -rotate-6 -mr-8" data-aos="slide-up" data-aos-duration="1000" style={{ zIndex: 1 }}>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-50"></div>
              <h3 className="text-xl font-semibold text-white relative">Volunteer Your Time</h3>
              <p className="mt-4 text-gray-200 relative">Join our community of dedicated volunteers and contribute your time to support our initiatives.</p>
            </div>

            <div className="relative overflow-hidden bg-gray-700 p-8 rounded-lg shadow-lg transform rotate-3 -mr-8" data-aos="slide-up" data-aos-duration="700" style={{ zIndex: 2 }}>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-50"></div>
              <h3 className="text-xl font-semibold text-white relative">Donate Resources</h3>
              <p className="mt-4 text-gray-200 relative">Help us by donating resources or funds to support our programs and projects.</p>
            </div>

            <div className="relative overflow-hidden bg-gray-700 p-8 rounded-lg shadow-lg transform rotate-9" data-aos="slide-up" data-aos-duration="400" style={{ zIndex: 3 }}>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-50"></div>
              <h3 className="text-xl font-semibold text-white relative">Share Your Skills</h3>
              <p className="mt-4 text-gray-200 relative">Offer your expertise and skills to help us with various projects and initiatives.</p>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Link to="/get-involved" className="px-8 py-4 text-lg font-semibold text-white bg-green-600 rounded-full shadow-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105" onClick={handleScrollToTop}>Join Us</Link>
          </div>
        </div>
      </div>


      {/* Events Section */}
      <div className="relative bg-teal-900 py-10 mt-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full opacity-50 bg-teal-800"></div>
          <svg className="absolute inset-0 w-full h-full text-teal-400" fill="currentColor" viewBox="0 0 200 200" preserveAspectRatio="none">
            <path d="M0 0h200v200H0z" />
            <path d="M0 0l200 200M200 0l-200 200" stroke="currentColor" strokeWidth="2" />
          </svg>
          {/* Background Video */}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="https://videos.pexels.com/video-files/1580507/1580507-sd_640_360_30fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-black sm:text-5xl lg:text-6xl" data-aos="zoom-out" data-aos-duration="700">Upcoming Events</h2>
            <p className="mt-4 text-2xl font-bold text-black" data-aos="slide-right" data-aos-duration="700">Discover our exciting lineup of events and workshops designed to engage and inspire.</p>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Event Card 1 */}
              <div className="relative bg-teal-700 p-6 rounded-lg shadow-lg hover:bg-teal-600 transition duration-300 ease-in-out">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-30 rounded-lg"></div>
                <h3 className="text-2xl font-semibold text-white">Community Workshop</h3>
                <p className="mt-2 text-gray-300">Join us for a hands-on workshop to learn new skills and meet like-minded individuals.</p>
              </div>
              {/* Event Card 2 */}
              <div className="relative bg-teal-700 p-6 rounded-lg shadow-lg hover:bg-teal-600 transition duration-300 ease-in-out">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-30 rounded-lg"></div>
                <h3 className="text-2xl font-semibold text-white">Annual Gala</h3>
                <p className="mt-2 text-gray-300">A night of celebration and networking with supporters and community leaders.</p>
              </div>
              {/* Event Card 3 */}
              <div className="relative bg-teal-700 p-6 rounded-lg shadow-lg hover:bg-teal-600 transition duration-300 ease-in-out">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 rounded-lg"></div>
                <h3 className="text-2xl font-semibold text-white">Charity Run</h3>
                <p className="mt-2 text-gray-300">Participate in our charity run to raise funds and awareness for our cause.</p>
              </div>
            </div>
            <div className="mt-5 flex justify-center">
              <Link to="/events" className="px-6 py-3 text-lg font-semibold text-teal-900 bg-white rounded-md shadow-md hover:bg-gray-100 transition duration-300 ease-in-out" onClick={handleScrollToTop}  data-aos="slide-up" data-aos-duration="700">See All Events</Link>
            </div>
          </div>
        </div>
      </div>




      {/* Blog/News Section */}
      <div className="relative bg-gray-900 py-12 mt-10 overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="https://videos.pexels.com/video-files/854765/854765-sd_640_360_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl" data-aos="zoom-out" data-aos-duration="700">Blog & News</h2>
            <p className="mt-4 text-lg text-white">Read our latest updates, success stories, and news.</p>
            <div className="mt-8 flex justify-center">
              <Link to="/blog" className="px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-md shadow-md hover:bg-green-600" onClick={handleScrollToTop} data-aos="slide-up" data-aos-duration="700">Read Our Blog</Link>
            </div>
          </div>
        </div>
      </div>



      {/* Contact Us Section */}
      <div className="relative bg-gray-800 py-12 mt-10 overflow-hidden">
        <img
          src="https://media.istockphoto.com/id/1716219668/photo/contact-us-telephone-envelope-letter-and-e-mail-symbols-on-wooden-round-in-row-on-table-with.jpg?s=612x612&w=0&k=20&c=QkmdTBD6q-HQtFExzfPPm08-e_t1rnVZGqbaVA928E8="
          alt="Contact Background"
          className="absolute inset-0 object-cover w-full h-full opacity-50"
        />
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl" data-aos="zoom-in" data-aos-duration="700">Contact Us</h2>
            <p className="mt-4 text-lg text-gray-300" data-aos="slide-up" data-aos-duration="700">Get in touch with us for any inquiries or support.</p>
            <div className="mt-8 flex justify-center">
              <Link
                to="/contact"
                className="px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-md shadow-md hover:bg-green-600" onClick={handleScrollToTop}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-teal-900 py-12 mt-10">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white" data-aos="zoom-out" data-aos-duration="700">Stay Updated!</h2>
        <p className="mt-4 text-lg text-center text-gray-300" data-aos="slide-left" data-aos-duration="700">Sign up to receive updates and stories about our educational initiatives.</p>
        <div className="mt-8 flex justify-center">
          <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 w-80 rounded-md text-gray-800"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-md shadow-md hover:bg-green-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LandingPage;
