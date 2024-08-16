import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      background: '#333',
      backgroundColor: 'gray',
      padding: '10px',
      display: 'flex',
      justifyContent: 'space-around'
    }}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '18px'
};

export default Navbar;