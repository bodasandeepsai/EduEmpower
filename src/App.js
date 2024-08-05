import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import AboutUs from './Components/AboutUs';
import Projects from './Components/Projects';
import ProjectDetail from './Components/ProjectDetail';
import GetInvolved from './Components/GetInvolved';
import Events from './Components/Events';
import EventDetail from './Components/EventDetail';
import Blog from './Components/Blog';
import BlogDetail from './Components/BlogDetail';
import ContactUs from './Components/ContactUs';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:eventId" element={<EventDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />

        <Route path="/contact" element={<ContactUs />} />


      </Routes>
    </Router>
  );
}

export default App;