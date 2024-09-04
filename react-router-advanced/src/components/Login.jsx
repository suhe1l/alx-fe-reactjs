import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    // Redirect the user to the page they were trying to access, or to the profile page if no specific page was targeted
    const from = location.state?.from?.pathname || "/profile";
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default Login;
