import React from 'react';
import appImage from '../../assets/app-dev-image.png'; 
import '../../style.css';
const CoreServices = () => {
  return (
    <div className="core-services text-white py-5">
      <div className="text-center mb-5">
        <h1 className="core-title">OUR CORE SERVICES</h1>
      </div>

      <div className="container d-flex justify-content-center">
        <div className="card custom-card bg-dark text-light p-4 rounded-4 shadow">
          <div className="card-body d-flex flex-column flex-md-row align-items-center">
            {/* Image + Title */}
            <div className="text-center mb-4 mb-md-0 me-md-4">
              <h3 className="fw-bold mb-3">App Development</h3>
              <img src={appImage} alt="App Dev" className="app-dev-img" />
            </div>

            {/* Service List */}
            <div className="ms-md-4">
              <ul className="list-unstyled small mb-4">
                <li>• Android, iOS & Hybrid App Development</li>
                <li>• Custom Mobile Solutions</li>
                <li>• SaaS and Cloud-Based Apps</li>
                <li>• Food Delivery, Cab Booking, Logistics & Grocery Apps</li>
                <li>• App Maintenance & Scaling</li>
              </ul>
              <button className="btn btn-outline-light btn-sm rounded-pill">
                Read more &gt; &gt;
              </button>
            </div>
          </div>s
        </div>
      </div>
    </div>
  );
};

export default CoreServices;
