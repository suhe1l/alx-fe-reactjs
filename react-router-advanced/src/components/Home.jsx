import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Our React Router Advanced Demo</h1>
      <p>This application demonstrates advanced routing techniques in React:</p>
      <ul>
        <li>Nested Routes</li>
        <li>Protected Routes</li>
        <li>Dynamic Routing</li>
      </ul>
      <p>Explore the following pages to see these techniques in action:</p>
      <nav>
        <ul>
          <li><Link to="/profile">Profile (Protected Route)</Link></li>
          <li><Link to="/blog/1">Blog Post 1 (Dynamic Route)</Link></li>
          <li><Link to="/blog/2">Blog Post 2 (Dynamic Route)</Link></li>
        </ul>
      </nav>
      <p>Note: You need to be logged in to access the Profile page.</p>
    </div>
  );
}

export default Home;
