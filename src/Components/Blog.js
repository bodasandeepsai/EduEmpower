// Blog.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // Adjust the path if necessary


const Blog = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const blogPosts = [
    {
      id: 1,
      title: 'Empowering Education for All',
      author: 'Jane Doe',
      date: 'August 3, 2024',
      image: 'https://media.istockphoto.com/id/1376136521/photo/focus-on-teacher-teacher-asking-questions-and-girl-raising-hands-to-answer-at-classroom.webp?b=1&s=170667a&w=0&k=20&c=9DXDwvBfoQEM83KHVluIW7WIIPDBHWvoE-JXms3dO8c=',
      summary: 'Discover how our NGO is transforming lives through education.',
    },
    {
      id: 2,
      title: 'Success Story: John’s Journey',
      author: 'John Smith',
      date: 'July 25, 2024',
      image: 'https://plus.unsplash.com/premium_photo-1679243792923-fe4631b234d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3VjY2VzcyUyMFN0b3J5JTNBJTIwSm9obiVFMiU4MCU5OXMlMjBKb3VybmV5fGVufDB8fDB8fHww',
      summary: 'Read about John’s journey and how he achieved his educational goals.',
    },
    {
      id: 3,
      title: 'The Impact of Technology on Modern Classrooms',
      author: 'Sophie Kim',
      date: 'September 12, 2024',
      image: 'https://media.istockphoto.com/id/1165145708/photo/latin-american-teacher-teaching-design-at-the-computer-lab-to-a-big-group-of-students.webp?b=1&s=170667a&w=0&k=20&c=1_ugbvGy7yXHljoNpairMuJIq7VzK_kIKmpotXXljn4=',
      summary: 'An in-depth look at how technology is revolutionizing classroom settings and the benefits it brings to students and educators.',
    },
    // Add more blog posts here
  ];

  return (
    <>
      <Navbar />
      <div className="relative bg-teal-200 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Blogs/News</h1>
          <div className="relative">
            {blogPosts.map((post, index) => (
              <div
                key={post.id}
                className={`relative transform transition-transform duration-500 ease-in-out bg-white shadow-lg rounded-lg overflow-hidden mx-10`}
                style={{
                  transform: `rotate(${index % 2 === 0 ? 2 : -2}deg)`,
                  marginBottom: '30px',
                }}
              >
                <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-2">By {post.author} on {post.date}</p>
                  <p className="text-gray-800 mb-4">{post.summary}</p>
                  <Link to={`/blog/${post.id}`} className="text-teal-500 hover:underline" onClick={handleScrollToTop}>Read more</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
