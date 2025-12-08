import { Navigate, NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-green-600 text-white">
      <div
        className="max-w-7xl mx-auto px-4 py-8 grid gap-8 
                    grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
      >
        <div>
          <h2 className="text-lg font-bold mb-2">Brave Photography</h2>
          <p className="text-sm mb-2">
            Capturing life's precious moments with creativity and passion.
            Professional photography services for all occasions.
          </p>
          <div className="mt-2">Facebook</div>
        </div>

        <div>
          <h2 className="text-lg font-bold  mb-2">Quick Links</h2>
          <NavLink to="/" className="text-sm hover:underline block mb-1">
            Home
          </NavLink>
          <NavLink
            to="/services"
            className="text-sm hover:underline block mb-1"
          >
            Services
          </NavLink>
          <NavLink to="/contact" className="text-sm hover:underline block mb-1">
            Contact
          </NavLink>
        </div>
        

        <div>
          <h2 className="text-lg font-bold mb-2">Our Services</h2>
          <p className="text-sm">Weeding Photography</p>
          <p className="text-sm">Portraits Sessions</p>
          <p className="text-sm">Event Coverage</p>
          <p className="text-sm">Commercial Photgraphy</p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-bold mb-2">Contact Us</h2>
          <p className="text-sm">Email: info@bravephoto.com</p>
          <p className="text-sm">Phone: +123 456 7890</p>
          <p className="text-sm">Address: 123 Photography St, City</p>
          <p
            className="text-sm bg-white p-4 m-1 ml-0 rounded-md text-green-600 font-bold text-center hover:cursor-pointer hover:scale-105 transition-all"
            onClick={() => navigate("/contact")}
          >
            Book Session
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
