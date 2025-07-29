import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#">Capyngen</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#">What We Offer</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Company Overview</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Careers</a></li>
            <li className="nav-item"><a className="nav-link" href="#">News & Updates</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
