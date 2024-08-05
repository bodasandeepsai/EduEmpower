import React from 'react';
import { useParams } from 'react-router-dom';
import { CalendarIcon, ClockIcon, MapPinIcon, ShareIcon } from '@heroicons/react/24/outline';
import Countdown from 'react-countdown';
import Navbar from './Navbar'; // Adjust the path if necessary


// Sample event details
const eventDetails = {
  // ... (existing event details)
  'annual-fundraising-gala': {
    title: 'Annual Fundraising Gala',
    date: '2024-09-15',
    time: '18:00',
    location: 'Grand Ballroom, City Hotel',
    description: 'Join us for an elegant evening of dinner, live music, and auctions to support our educational programs. Enjoy a night of luxury and philanthropy as we come together to make a difference.',
    image: 'https://images.unsplash.com/photo-1537849244241-351b40016963?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QW5udWFsJTIwRnVuZHJhaXNpbmclMjBHYWxhfGVufDB8fDB8fHww',
  },
  'community-outreach-workshop': {
    title: 'Community Outreach Workshop',
    date: '2024-10-05',
    time: '09:00',
    location: 'Community Center, Downtown',
    description: 'Participate in interactive workshops and sessions aimed at community development and educational outreach. Network with like-minded individuals and contribute to impactful community projects.',
    image: 'https://media.istockphoto.com/id/2024598674/photo/black-woman-helping-girls-with-disabilities-in-atelier.webp?b=1&s=170667a&w=0&k=20&c=FYdpAHFoKQwTb1L9Z9SLxrdPUbKq3xmC6OTAMVL5KV0=',
  },
  'volunteer-training-session': {
    title: 'Volunteer Training Session',
    date: '2024-11-10',
    time: '10:00',
    location: 'NGO Headquarters',
    description: 'A comprehensive training session for new volunteers to learn about our programs, mission, and how to effectively contribute. Gain valuable skills and become an integral part of our team.',
    image: 'https://media.istockphoto.com/id/1166163841/photo/group-of-business-people-raise-hands-up-to-agree-with-speaker-in-the-meeting-room-seminar.webp?b=1&s=170667a&w=0&k=20&c=WJu6aacyLHHJ-1XED1c1xnfVsPMjrSPYvz0ba9eyBKE=',
  },
  'charity-cycling-event': {
    title: 'Charity Cycling Event',
    date: '2024-12-01',
    time: '08:00',
    location: 'Central Park',
    description: 'Join us for a charity cycling event to raise funds for our educational initiatives. Enjoy a scenic ride through the park and participate in a community-building activity.',
    image: 'https://media.istockphoto.com/id/157606002/photo/bike-touring.webp?b=1&s=170667a&w=0&k=20&c=8nqNd3s93AuguA6-s01vylI5-IRwhDBvTb7SF5Q_7z0=',
  },
  'summer-camp-expo': {
    title: 'Summer Camp Expo',
    date: '2024-07-20',
    time: '10:00',
    location: 'City Fairgrounds',
    description: 'Explore various summer camps and programs for children. Meet with camp organizers and learn about opportunities for kids to engage in educational and fun activities over the summer.',
    image: 'https://media.istockphoto.com/id/1370083432/photo/school-children-learning-about-ecology-nature-and-environment-with-teacher.webp?b=1&s=170667a&w=0&k=20&c=f8AOatlvfpwssOHS39_kf-_DHFHlieMj-fjFng349w4=',
  },

};

const EventDetail = () => {
  const { eventId } = useParams();
  const event = eventDetails[eventId];

  if (!event) {
    return (
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-extrabold mb-4 text-center">Event Not Found</h1>
            <p className="text-gray-700 text-center">The event you are looking for does not exist. Please check the URL or go back to the <a href="/" className="text-green-500 hover:underline">homepage</a>.</p>
          </div>
        </div>
      </div>
    );
  }

  const completionTime = new Date(`${event.date}T${event.time}:00`);

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-teal-200 p-8 rounded-lg shadow-lg">
            <div className="flex flex-col lg:flex-row lg:space-x-8">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <img src={event.image} alt={event.title} className="w-full h-auto object-cover rounded-lg shadow-md" />
              </div>
              <div className="lg:w-1/2">
                <h1 className="text-3xl font-extrabold mb-4">{event.title}</h1>
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
                <p className="text-gray-700 mb-6">{event.description}</p>
                <div className="flex justify-center mb-6">
                  <a
                    href="#register"
                    className="px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-md shadow-md hover:bg-green-600 transition duration-300"
                    onClick={(e) => {
                      e.preventDefault(); // Prevents the default anchor click behavior
                      alert('Resgistration successful, Thank you for your interest!');
                    }}
                  >
                    Register Now
                  </a>
                </div>
                <div className="flex items-center mb-6">
                  <ShareIcon className="w-6 h-6 text-gray-600 mr-2" />
                  <p className="text-gray-600 mr-2">Share this event:</p>
                  <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Twitter</a>
                  <span className="mx-2">|</span>
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Facebook</a>
                </div>
                <div className="bg-green-100 p-4 rounded-lg shadow-md mb-6">
                  <h2 className="text-xl font-bold mb-2">Event Countdown</h2>
                  <Countdown
                    date={completionTime}
                    renderer={({ days, hours, minutes, seconds, completed }) => (
                      completed ? <span className="text-green-600 font-semibold">The event is happening now!</span> : (
                        <div className="text-lg font-semibold">
                          <span>{days} Days </span>
                          <span>{hours} Hours </span>
                          <span>{minutes} Minutes </span>
                          <span>{seconds} Seconds</span>
                        </div>
                      )
                    )}
                  />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-md mb-6">
                  <h2 className="text-xl font-bold mb-2">What People Are Saying</h2>
                  <div className="border-t border-gray-300 pt-4">
                    <blockquote className="italic text-gray-700 mb-4">
                      “Attending the Annual Fundraising Gala was a truly memorable experience. It was inspiring to see so many people come together for a great cause.”
                    </blockquote>
                    <p className="font-semibold text-gray-800">- Jane Doe, Attendee</p>
                  </div>
                  <div className="border-t border-gray-300 pt-4">
                    <blockquote className="italic text-gray-700 mb-4">
                      “The Community Outreach Workshop was both informative and engaging. It was great to see the impact we can make as a community.”
                    </blockquote>
                    <p className="font-semibold text-gray-800">- John Smith, Participant</p>
                  </div>
                  <div className="border-t border-gray-300 pt-4">
                    <blockquote className="italic text-gray-700 mb-4">
                      “The Volunteer Training Session was highly educational. I feel better equipped to contribute to the NGO's mission.”
                    </blockquote>
                    <p className="font-semibold text-gray-800">- Alice Johnson, Volunteer</p>
                  </div>
                </div>
                {/* FAQ Section */}
                <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                  <h2 className="text-xl font-bold mb-2">Frequently Asked Questions</h2>
                  <div className="border-t border-gray-300 pt-4">
                    <h3 className="font-semibold text-gray-800 mb-2">What is the dress code for the event?</h3>
                    <p className="text-gray-700">The dress code for the Annual Fundraising Gala is formal. Please wear your best evening attire.</p>
                  </div>
                  <div className="border-t border-gray-300 pt-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Is there parking available at the venue?</h3>
                    <p className="text-gray-700">Yes, there is ample parking available at the Grand Ballroom. Valet parking is also provided.</p>
                  </div>
                  <div className="border-t border-gray-300 pt-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Can I bring a guest?</h3>
                    <p className="text-gray-700">Yes, you can bring a guest. Please make sure to register in advance to secure additional tickets.</p>
                  </div>
                  <div className="border-t border-gray-300 pt-4">
                    <h3 className="font-semibold text-gray-800 mb-2">What is the refund policy?</h3>
                    <p className="text-gray-700">Refunds are available up to one week before the event. Please contact our support team for more details.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetail;