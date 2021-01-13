import React from "react";
import "./Navbar.css";
import { BrowserRouter as Router} from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link';

function Navbar () {
  return <nav className="navbar is-black is-fixed-top is-hidden-mobile columns is-mobile">
      <Router>
    


  <Link smooth to="#about" className="column has-text-white is-size-1 has-text-centered mt-6">
    About
  </Link>
  <Link smooth to="#skills" className="column has-text-white is-size-1 has-text-centered mt-6">
    Skills
  </Link>
  <Link smooth to="#projects" className="column has-text-white is-size-1 has-text-centered mt-6">
    Projects
  </Link>
  <Link smooth to="#Contact" className="column has-text-white is-size-1 has-text-centered mt-6">
    Contact
  </Link>

  </Router>
</nav>
}

export default Navbar;





