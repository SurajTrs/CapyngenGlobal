import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style.css';

const Automotive = () => {
  return (
    <div className="bg-black text-white">

      {/* Hero Section */}
      <div
        className="d-flex align-items-center justify-content-center text-white"
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
        <h1 className="display-4 fw-bold">Automotive</h1>
        <p className="lead">Driving innovation and efficiency in the automotive industry.</p>
        <button className="btn btn-primary mt-3">Let's Talk →</button>
      </div>

      {/* Intro Paragraph */}
      <div className="container py-4">
        <p className="text-center text-secondary">
          The automotive industry is in a period of rapid transformation, driven by electric vehicles, autonomous driving, connected cars, and new mobility services. To stay competitive, manufacturers, suppliers, and dealers need advanced IT solutions that streamline operations, enhance customer experiences, and accelerate innovation. We provide comprehensive automotive IT solutions designed to meet these evolving demands.
        </p>
      </div>

      {/* What Our Automotive Solutions Offer */}
      <div className="container py-5">
        <h2 className="fw-bold text-center text-primary mb-4">What Our Automotive Solutions Offer</h2>

        {/* Service 1 - Connected Car Solutions */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-start">
            <h5 className="fw-bold">Connected Car Solutions</h5>
            <p className="text-secondary">Enable seamless connectivity for vehicles, offering features like in-car infotainment, real-time diagnostics, remote vehicle control, and over-the-air (OTA) updates. Enhance the driving experience and unlock new revenue streams.</p>
          </div>
          <div className="col-md-6">
            <img src="/images/connected-car.jpg" alt="Connected Car Solutions" className="img-fluid rounded shadow" />
          </div>
        </div>

        {/* Service 2 - Autonomous Driving Systems */}
        <div className="row align-items-center flex-md-row-reverse mb-5">
          <div className="col-md-6 text-start">
            <h5 className="fw-bold">Autonomous Driving Systems</h5>
            <p className="text-secondary">Develop and integrate advanced software for autonomous vehicles, focusing on sensor fusion, perception, decision-making algorithms, and vehicle control. Ensure safety and reliability for future mobility.</p>
          </div>
          <div className="col-md-6">
            <img src="/images/autonomous-driving.jpg" alt="Autonomous Driving Systems" className="img-fluid rounded shadow" />
          </div>
        </div>

        {/* Service 3 - Manufacturing and Supply Chain Optimization */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-start">
            <h5 className="fw-bold">Manufacturing and Supply Chain Optimization</h5>
            <p className="text-secondary">Implement smart factory solutions, including IoT-driven production monitoring, predictive maintenance, and robotic process automation. Optimize supply chain logistics for efficiency, transparency, and cost reduction.</p>
          </div>
          <div className="col-md-6">
            <img src="/images/automotive-manufacturing.jpg" alt="Manufacturing Optimization" className="img-fluid rounded shadow" />
          </div>
        </div>

        {/* Service 4 - Dealer Management Systems (DMS) */}
        <div className="row align-items-center flex-md-row-reverse mb-5">
          <div className="col-md-6 text-start">
            <h5 className="fw-bold">Dealer Management Systems (DMS)</h5>
            <p className="text-secondary">Provide integrated DMS solutions that streamline sales, service, parts, and customer management processes for dealerships. Enhance operational efficiency and improve customer satisfaction.</p>
          </div>
          <div className="col-md-6">
            <img src="/images/dealer-management.jpg" alt="Dealer Management Systems" className="img-fluid rounded shadow" />
          </div>
        </div>

        {/* Service 5 - Electric Vehicle (EV) Infrastructure Support */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-start">
            <h5 className="fw-bold">Electric Vehicle (EV) Infrastructure Support</h5>
            <p className="text-secondary">Develop software and platforms for EV charging network management, battery monitoring, and energy optimization. Support the growing demand for sustainable transportation solutions.</p>
          </div>
          <div className="col-md-6">
            <img src="/images/ev-charging.jpg" alt="EV Infrastructure Support" className="img-fluid rounded shadow" />
          </div>
        </div>

      </div>

      {/* Why Choose Our Automotive Solutions */}
      <div className="container my-5">
        <div className="row rounded p-4 align-items-center" style={{ backgroundColor: '#111111ff' }}>
          <div className="col-md-6 text-white">
            <h4>Why Choose Our Automotive Solutions</h4>
            <ul>
              <li className="mb-3"> <strong>Future-Ready Technology:</strong> Solutions built to leverage the latest advancements in AI, IoT, and cloud computing.</li>
              <li className="mb-3"> <strong>End-to-End Expertise:</strong> Comprehensive support from vehicle design and manufacturing to sales and after-sales service.</li>
              <li className="mb-3"> <strong>Enhanced Customer Experience:</strong> Create engaging and seamless interactions across all touchpoints.</li>
              <li className="mb-3"> <strong>Operational Excellence:</strong> Optimize processes, reduce costs, and improve efficiency throughout the automotive value chain.</li>
              <li className="mb-3"> <strong>Scalability and Security:</strong> Robust and secure platforms that can grow with your business and protect sensitive data.</li>
            </ul>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1582234057630-9b43c683c31e" // Placeholder for why choose us
              className="img-fluid rounded shadow"
              alt="Why Choose Us"
            />
          </div>
        </div>
      </div>

      {/* Final Text */}
      <div className="text-center py-4" style={{ color: '#91c4ffe9' }}>
        <p>Accelerate your journey into the future of mobility with our advanced automotive IT solutions.</p>
      </div>
    </div>
  );
};

export default Automotive;