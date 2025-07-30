import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style.css';
const EnergyResources = () => {
  return (
    <div className=" bg-black">

      {/* Hero Section */}
      <div
       className="text-white d-flex align-items-center justify-content-center"
style={{
  backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(11, 42, 76, 0.9)), url("/background.jpg")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '60vh',
  flexDirection: 'column',
  display: 'flex',
  textAlign: 'center'
}}

      >
        <h1 className="display-4 fw-bold">Energy, Resources, and Utilities</h1>
        <p className="lead">
Giving the Future Power with Energy IT Solutions</p>
        <button className="btn btn-primary mt-3">Let's Talk →</button>
      </div>

      {/* Intro Paragraph */}
      <div className="container py-4">
        <p className="text-center text-secondary">
The Energy, Resources, and Utilities sector is moving towards smarter infrastructure, digitalisation, and sustainability. Capyngen is helping businesses in this field speed up change by providing cutting-edge Energy IT Solutions and flexible Resource Management Software that are good for the environment and help operations run more smoothly.</p>
      </div>

      {/* Core Skills */}
      <div className="container py-5">
        <h3 className="fw-bold text-start text-white">Our Solutions Include:</h3>
        <ul className="text-secondary">
             <li className="mb-3">Systems for Managing the Smart Grid</li>
      <li className="mb-3">Tools for predicting energy use and balancing loads</li>
      <li className="mb-3">Monitoring Assets with IoT</li>
      <li className="mb-3">Mobile Apps for Field Operations</li>
      <li className="mb-3">Platforms for billing and engaging with customers</li>
        </ul>
      </div>

      {/* Emphasis Text */}
      <div className="container py-3">
        <p className="text-center" style={{ color: '#3b8fe2e9' }}>
Capyngen's Energy IT Solutions are made to add real-time insights, better asset control, and predictive intelligence to energy distribution systems. Our platforms give you the power to come up with new ideas, whether you run wind farms or electrical grids.

</p>
      </div>

      {/* Why Capyngen Section */}
      <div className="container my-5">
        <div className="row rounded p-4 align-items-center" style={{backgroundColor:'#111111ff'}}>
          <div className="col-md-6 text-white">
            <h4>Why should you work with Capyngen?</h4>
            <ul>
         <li className="mb-3">Our tools make it possible to run smart grids, manage outages, and do remote diagnostics.</li>
      <li className="mb-3">Our Resource Management Software makes it easier to coordinate your workforce and assets.</li>
      <li className="mb-3">Our dashboards show how much energy is used, how much carbon is released, and how much it costs.</li>
      <li className="mb-3">Our systems can work in different places, regions, and energy sectors.</li>
    </ul>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
              className="img-fluid rounded shadow"
              alt="Mobile banking"
            />
          </div>
        </div>
      </div>

      {/* Footer Statement */}
      <div className="text-center py-4 "style={{ color: '#91c4ffe9' }}>
Capyngen's Energy IT Solutions and Resource Management Software make utility networks smarter, greener, and more connected. We provide technology that helps you build a better, more sustainable future, whether you're a small business or a large utility company. </div>
    </div>
  );
};

export default EnergyResources;
