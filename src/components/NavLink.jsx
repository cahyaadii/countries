// src/components/Navbar/NavLink.jsx
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const CustomNavLink = ({ to, children, mobile = false }) => (
  <NavLink
    to={to}
    className={({ isActive }) => 
      `transition-all ${
        isActive ? "text-black font-bold" : "text-gray-500"
      } ${mobile ? "block" : "hover:text-black"}`
    }
    end={false} // Untuk partial matching path
  >
    {children}
  </NavLink>
);

CustomNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  mobile: PropTypes.bool,
};

export default CustomNavLink;