import React, { useRef,useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // Adjust the path if necessary
import AOS from 'aos';
import 'aos/dist/aos.css';

// Sample projects data
const projectsData = [
  {
    id: 1,
    title: 'Literacy Program',
    description: 'Improving reading and writing skills among children in underserved communities.',
    image: 'https://media.istockphoto.com/id/1200919746/photo/book-on-desk-with-literacy-word.webp?b=1&s=170667a&w=0&k=20&c=Pi-QXJcbAjoYZAtM3vUpZztn459Vc14C_KwKttmTl2c=',
    category: 'Ongoing'
  },
  {
    id: 2,
    title: 'STEM Education Initiative',
    description: 'Introducing STEM education to schools in rural areas.',
    image: 'https://media.istockphoto.com/id/1368662920/photo/artificial-intelligent-and-digital-technology-concept.webp?b=1&s=170667a&w=0&k=20&c=sWiaSchN5UrR8hZ5YGSyAlgtnWDHHVaKd7YkpixwhzQ=',
    category: 'Completed'
  },
  {
    id: 3,
    title: 'Scholarship Fund',
    description: 'Providing scholarships to underprivileged students for higher education.',
    image: 'https://media.istockphoto.com/id/1365852437/photo/graduation-hat-on-coins-money-in-the-glass-bottle-on-natural-green-background-saving-money.webp?b=1&s=170667a&w=0&k=20&c=0vZxJ6ARb_KpRsHqfct1MrD4XZYp7qexSgNQ61Fo_as=',
    category: 'Ongoing'
  },
  {
    id: 4,
    title: 'Vocational Training',
    description: 'Offering practical skills training to improve employability.',
    image: 'https://media.istockphoto.com/id/1331350008/photo/business-team-working-on-a-laptop-computer.webp?b=1&s=170667a&w=0&k=20&c=8-sWimeW4p1Wlmn7t-nTgOwRtLWsNDStqL_s11gQKWk=',
    category: 'Completed'
  }
  // Add more projects as needed
];

const Projects = () => {
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

  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === filter);

  return (
    <>
      <Navbar/>
      <div className="container mx-auto px-4 py-20 bg-teal-200">
        <h1 className="text-4xl font-extrabold text-center mb-8">Our Projects</h1>

        {/* Filters */}
        <div className="flex justify-center mb-8" data-aos="fade-up">
          {['All', 'Ongoing', 'Completed'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 mx-2 text-white rounded-md shadow-lg ${filter === cat ? 'bg-teal-600' : 'bg-teal-400'} hover:bg-teal-500 transition-colors`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <Link to={`/projects/${project.id}`} className="text-teal-500 hover:underline"  onClick={handleScrollToTop}
              >Read More</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
