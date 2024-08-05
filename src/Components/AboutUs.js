import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Navbar from './Navbar'; // Adjust the path if necessary
import { DocumentTextIcon, GlobeAltIcon, UserGroupIcon, UserCircleIcon } from '@heroicons/react/24/outline';

// Sample team members data

const teamMembers = [
  {
    name: 'Jane Doe',
    position: 'Founder & Director',
    image: 'https://media.istockphoto.com/id/840531052/photo/smiling-businessman-or-worker-standing-in-suit-near-office-building.webp?b=1&s=170667a&w=0&k=20&c=VwC0aZkU7V1xoipgEQ5CMY-7Yw5MekD8K24lblK8XKQ=',
    description: 'Jane leads our organization with vision and dedication, working tirelessly to advance our mission.'
  },
  {
    name: 'John Smith',
    position: 'Program Manager',
    image: 'https://media.istockphoto.com/id/1500828257/photo/portrait-of-young-confident-indian-teenager-boy-wearing-suit-holding-laptop-in-hand-looking.webp?b=1&s=170667a&w=0&k=20&c=Io3LNzLYuRIGqdIbBMcmJ1bH74pbdhPsX7pV_vTCc4E=',
    description: 'John manages our programs with efficiency and compassion, ensuring that our initiatives have a meaningful impact.'
  },
  {
    name: 'Emily Johnson',
    position: 'Volunteer Coordinator',
    image: 'https://media.istockphoto.com/id/1489669078/photo/portrait-of-young-businesswoman-with-crossed-arms.webp?b=1&s=170667a&w=0&k=20&c=sbVn1ogv0zGCY5GLHwdGWuxTX6Fdt5lYHc51ZkU0Crk=',
    description: 'Emily coordinates our volunteer efforts, ensuring a seamless experience for those dedicated to our cause.'
  },
  // Add more team members as needed
];

const AboutUs = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '30px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '20px',
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '10px',
          dots: true
        }
      }
    ]
  };

  return (
    <>
        <Navbar />
      <div className="relative bg-gradient-to-r from-teal-100 to-teal-300 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <svg className="absolute top-0 left-0 w-full h-full text-teal-200" fill="currentColor" viewBox="0 0 200 200" preserveAspectRatio="none">
            <path d="M0 0h200v200H0z" />
            <path d="M0 0l200 200M200 0l-200 200" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <div className="relative container mx-auto px-4">
          {/* About Us Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4">About Us</h1>
            <p className="text-lg text-gray-700">
              Discover our journey, mission, and the dedicated team transforming education.
            </p>
          </div>

          {/* Our History and Mission Sections */}
          <div className="flex flex-col md:flex-row gap-12 mb-12">
            <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
              <div className="flex items-center justify-center text-teal-500 mb-4">
                <DocumentTextIcon className="w-20 h-20" />
              </div>
              <h2 className="text-3xl font-semibold text-center mb-2">Our History</h2>
              <p className="text-gray-700 text-base">
                Founded in 2001, our NGO embarked on a mission to bridge educational gaps for underprivileged children.
                We have evolved and expanded our reach over the years, launching impactful programs and forming strategic partnerships.
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-600">
                <li>2001: Foundation of the organization.</li>
                <li>2005: Launch of the scholarship program.</li>
                <li>2010: Introduction of vocational training programs.</li>
                <li>2015: International collaborations for broader impact.</li>
                <li>2020: Reached over 10,000 students.</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
              <div className="flex items-center justify-center text-teal-500 mb-4">
                <GlobeAltIcon className="w-20 h-20" />
              </div>
              <h2 className="text-3xl font-semibold text-center mb-2">Our Mission</h2>
              <p className="text-gray-700 text-base">
                Our mission is to ensure every child has access to quality education. We are committed to creating a supportive and inclusive environment that empowers both children and communities.
              </p>
              <p className="text-gray-700 mt-4">
                Our key focuses include:
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>Improving access to educational resources.</li>
                <li>Supporting community-based educational initiatives.</li>
                <li>Forming partnerships for greater reach and impact.</li>
                <li>Advocating for educational reforms.</li>
              </ul>
            </div>
          </div>

          {/* Our Team Section with Carousel */}
          <div className="bg-teal-500 p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-4xl font-extrabold text-center mb-6">Meet Our Team</h2>
            <Slider {...settings} className="team-slider">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 relative">
                  <div className="relative">
                    <img src={member.image} alt={member.name} className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-teal-500" />
                    
                  </div>
                  <h5 className="text-xl font-semibold text-center mb-1">{member.name}</h5>
                  <p className="text-gray-600 text-center">{member.position}</p>
                  <p className="text-gray-600 text-center mt-2">{member.description}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
