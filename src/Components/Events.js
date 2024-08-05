import React ,{useRef,useEffect,} from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // Adjust the path if necessary
import AOS from 'aos';
import 'aos/dist/aos.css';

import { CalendarIcon, ClockIcon, MapPinIcon, PlusCircleIcon } from '@heroicons/react/24/outline';

// Sample events data
const events = [
  {
    id: 1,
    title: 'Annual Fundraising Gala',
    date: '2024-09-15',
    time: '6:00 PM - 10:00 PM',
    location: 'Grand Ballroom, City Hotel',
    description: 'Join us for an elegant evening of dinner, live music, and auctions to support our educational programs.',
    registrationLink: '/events/annual-fundraising-gala',
    image: 'https://images.unsplash.com/photo-1537849244241-351b40016963?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QW5udWFsJTIwRnVuZHJhaXNpbmclMjBHYWxhfGVufDB8fDB8fHww'
  },
  {
    id: 2,
    title: 'Community Outreach Workshop',
    date: '2024-10-05',
    time: '9:00 AM - 3:00 PM',
    location: 'Community Center, Downtown',
    description: 'Participate in interactive workshops and sessions aimed at community development and educational outreach.',
    registrationLink: '/events/community-outreach-workshop',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q29tbXVuaXR5JTIwT3V0cmVhY2glMjBXb3Jrc2hvcHxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 3,
    title: 'Volunteer Training Session',
    date: '2024-11-10',
    time: '10:00 AM - 12:00 PM',
    location: 'NGO Headquarters',
    description: 'A training session for new volunteers to learn about our programs and how to effectively contribute.',
    registrationLink: '/events/volunteer-training-session',
    image: 'https://media.istockphoto.com/id/1178861746/photo/young-colleagues-raising-hands-at-the-business-meeting-in-office.webp?b=1&s=170667a&w=0&k=20&c=-qJ8qrIn_qjNjyzEqAGfa91m6P2MjB726s7NsICMDVM='
  },
  {
    id: 4,
    title: 'Charity Cycling Event',
    date: '2024-12-01',
    time: '8:00 AM - 12:00 PM',
    location: 'Central Park',
    description: 'Join us for a charity cycling event to raise funds for our educational initiatives. Enjoy a scenic ride through the park and participate in a community-building activity.',
    registrationLink: '/events/charity-cycling-event',
    image: 'https://media.istockphoto.com/id/864496824/photo/sporty-friends-riding-bicycles-on-dirt-road.webp?b=1&s=170667a&w=0&k=20&c=tPrzumyURnQ1q06GW-eK3Ruo7eR3NlLpA5QYLOKYzxg='
  },
  {
    id: 5,
    title: 'Summer Camp Expo',
    date: '2024-07-20',
    time: '10:00 AM - 4:00 PM',
    location: 'City Fairgrounds',
    description: 'Explore various summer camps and programs for children. Meet with camp organizers and learn about opportunities for kids to engage in educational and fun activities over the summer.',
    registrationLink: '/events/summer-camp-expo',
    image: 'https://media.istockphoto.com/id/1397843759/photo/shot-of-a-two-friends-holding-a-sign-in-a-outside-in-a-park.webp?b=1&s=170667a&w=0&k=20&c=6p2VrdUf9UdR3z2BjWz0KkG8oVeq0a3uykLNnd5PFXw='
  }
  // Add more events as needed
];

const Events = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const videoRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-in', once: false });
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (

    <>
    <Navbar/>
    <div className="bg-gray-100 py-20">
      <div className="container bg-teal-200 mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center mb-8" data-aos="zoom-out">Upcoming Events & Workshops</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-right">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
              <div className="flex items-center text-gray-600 mb-4">
                <CalendarIcon className="w-6 h-6 mr-2" />
                <p>{event.date}</p>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <ClockIcon className="w-6 h-6 mr-2" />
                <p>{event.time}</p>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPinIcon className="w-6 h-6 mr-2" />
                <p>{event.location}</p>
              </div>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <div className="flex justify-between items-center">
                <Link to={event.registrationLink} className="text-teal-600 hover:text-green-600 flex items-center" onClick={handleScrollToTop}>
                  <PlusCircleIcon className="w-6 h-6 mr-2" />
                  More Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Events;
