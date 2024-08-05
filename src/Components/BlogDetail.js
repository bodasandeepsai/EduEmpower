// BlogDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar'; // Adjust the path if necessary


const BlogDetails = () => {
  const { id } = useParams();

  // Sample data for demonstration purposes
  const blogPosts = [
    {
      id: 1,
      title: 'Empowering Education for All',
      author: 'Jane Doe',
      date: 'August 3, 2024',
      image: 'https://media.istockphoto.com/id/1376136521/photo/focus-on-teacher-teacher-asking-questions-and-girl-raising-hands-to-answer-at-classroom.webp?b=1&s=170667a&w=0&k=20&c=9DXDwvBfoQEM83KHVluIW7WIIPDBHWvoE-JXms3dO8c=',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla vitae laoreet bibendum, ligula magna vehicula tortor, ut tincidunt risus purus at sapien. Duis luctus eros et arcu laoreet, ac viverra enim fermentum. Integer vulputate pharetra arcu, id euismod mi sodales eu. Mauris ultrices, nisi ac lobortis lacinia, libero sapien hendrerit ex, in sagittis risus turpis at justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed scelerisque tellus at lectus facilisis, in iaculis metus sagittis.`
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

  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (

    <>
      <Navbar />
      <div className="relative bg-teal-200 py-20">
        <div className="relative">
          <img src={post.image} alt={post.title} className="w-full h-96 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white text-center">{post.title}</h1>
          </div>
        </div>
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row">
          <div className="flex-1 md:mr-8 mb-8 md:mb-0">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">By {post.author} on {post.date}</p>
              <div className="prose max-w-none mb-8">
                <p>{post.content}</p>
              </div>
              <a href="#top" className="text-teal-500 hover:underline">Back to top</a>
            </div>
          </div>
          <div className="hidden md:block sticky top-20 w-64">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">Related Posts</h2>
              {/* Example related posts */}
              <ul>
                <li>
                  <a href="#" className="text-teal-500 hover:underline">Related Post 1</a>
                </li>
                <li>
                  <a href="#" className="text-teal-500 hover:underline">Related Post 2</a>
                </li>
                {/* Add more related posts as needed */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
