import { NavLink } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-200 p-4 text-center">
    <p>
      Visit us at{' '}
      <NavLink to="/contact" className="text-blue-600 hover:underline">
        Contact Page
      </NavLink>
    </p>
    <p className="text-sm mt-2">&copy; 2025 Photography Company</p>
  </footer>
);

export default Footer;
