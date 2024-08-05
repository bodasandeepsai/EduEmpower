import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar'; // Adjust the path if necessary
import { motion } from 'framer-motion';

// Sample projects data
const projectsData = [
  {
    id: 1,
    title: 'Literacy Program',
    description: 'A comprehensive literacy program aimed at improving reading and writing skills among children in underserved communities.',
    image: 'https://media.istockphoto.com/id/1200919746/photo/book-on-desk-with-literacy-word.webp?b=1&s=170667a&w=0&k=20&c=Pi-QXJcbAjoYZAtM3vUpZztn459Vc14C_KwKttmTl2c=',
    details: 'Our literacy program focuses on children who struggle with reading and writing. We offer one-on-one tutoring, group classes, and provide necessary resources to enhance their learning experience. We work closely with local schools to tailor our approach and ensure maximum impact.',
    status: 'Ongoing'
  },
  {
    id: 2,
    title: 'STEM Education Initiative',
    description: 'An initiative to introduce STEM (Science, Technology, Engineering, Mathematics) education to schools in rural areas.',
    image: 'https://media.istockphoto.com/id/1368662920/photo/artificial-intelligent-and-digital-technology-concept.webp?b=1&s=170667a&w=0&k=20&c=sWiaSchN5UrR8hZ5YGSyAlgtnWDHHVaKd7YkpixwhzQ=',
    details: 'The STEM Education Initiative aims to equip students with the skills and knowledge necessary for a career in STEM fields. We provide hands-on learning experiences, modern educational tools, and mentorship programs to make learning engaging and impactful. Partnerships with technology companies help us bring cutting-edge resources to the classrooms.',
    status: 'Completed'
  },
  {
    id: 3,
    title: 'Scholarship Fund',
    description: 'Providing scholarships to underprivileged students to help them pursue higher education.',
    image: 'https://media.istockphoto.com/id/1365852437/photo/graduation-hat-on-coins-money-in-the-glass-bottle-on-natural-green-background-saving-money.webp?b=1&s=170667a&w=0&k=20&c=0vZxJ6ARb_KpRsHqfct1MrD4XZYp7qexSgNQ61Fo_as=',
    details: 'Our Scholarship Fund offers financial assistance to talented students who lack the resources to pursue higher education. This initiative helps them achieve their academic and professional goals, fostering future leaders and innovators. We also provide career counseling and support to ensure their success beyond their studies.',
    status: 'Ongoing'
  },
  {
    id: 4,
    title: 'Vocational Training',
    description: 'Offering vocational training programs to help youths gain practical skills and improve employability.',
    image: 'https://media.istockphoto.com/id/1331350008/photo/business-team-working-on-a-laptop-computer.webp?b=1&s=170667a&w=0&k=20&c=8-sWimeW4p1Wlmn7t-nTgOwRtLWsNDStqL_s11gQKWk=',
    details: 'Vocational Training programs are designed to provide practical skills and certifications in various trades. These programs aim to improve job prospects and empower individuals with the skills needed for meaningful employment. We collaborate with industry experts to ensure our training is relevant and effective.',
    status: 'Completed'
  }
  // Add more projects as needed
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return <div className="container mx-auto px-4 py-12"><h1 className="text-4xl font-extrabold text-center">Project Not Found</h1></div>;
  }

  return (
    <>
      <Navbar />
      <div className="relative bg-gray-100 py-12">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 opacity-30"></div>
        <div className="relative container mx-auto px-4 py-12">
          <motion.div 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-extrabold mb-6 text-gray-800">{project.title}</h1>
          </motion.div>
          
          <motion.img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-80 object-cover rounded-lg shadow-lg mb-6"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />

          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto px-4"
          >
            <p className="text-lg text-gray-700 mb-4">{project.description}</p>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Details</h2>
            <p className="text-gray-600 mb-4">{project.details}</p>
            <p className="text-gray-600"><strong>Status:</strong> {project.status}</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
