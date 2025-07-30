import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style.css';
const OilGas = () => {
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
        <h1 className="display-4 fw-bold">Oil & Gas Industry</h1>
        <p className="lead">
Capyngen is your strategic partner in the oil and gas business all over the world.
</p>
        <button className="btn btn-primary mt-3">Let's Talk →</button>
      </div>

      {/* Intro Paragraph */}
      <div className="container py-4">
        <p className="text-center text-secondary">
The oil and gas industry gives the world the energy it needs to run. It keeps the world economy going by providing energy to homes and businesses. We know how important this area is to Capyngen, and we give energy companies smart, safe, and effective ways to do well in a world that is always changing.</p>
      </div>

<div className="container py-5">

  {/* Section 1 - Image Left, Content Right */}
  <div className="row align-items-center mb-5">
    <div className="col-md-6">
      <img src="/images/oil-gas.jpg" alt="Oil & Gas" className="img-fluid rounded shadow" />
    </div>
    <div className="col-md-6 text-start text-white">
      <h3 className="fw-bold">Meeting the Energy Needs of the World</h3>
      <p className="text-secondary">
        The oil and gas industry operates across several critical stages. Capyngen supports you at every step with reliable and smart solutions.
      </p>
      <ul className="text-secondary">
        <li><strong>Upstream:</strong> Exploration and drilling</li>
        <li><strong>Midstream:</strong> Transport and storage</li>
        <li><strong>Downstream:</strong> Refining and product distribution</li>
      </ul>
    </div>
  </div>

  {/* Section 2 - Content Left, Image Right */}
  <div className="row align-items-center flex-md-row-reverse mb-5">
    <div className="col-md-6">
      <img src="/images/exploration.jpg" alt="Upstream Solutions" className="img-fluid rounded shadow" />
    </div>
    <div className="col-md-6 text-start text-white">
      <h3 className="fw-bold">Upstream Exploration & Production</h3>
      <ul className="text-secondary">
        <li>Geological surveys and seismic data analysis</li>
        <li>Onshore and offshore drilling support</li>
        <li>Reservoir management and real-time monitoring</li>
        <li>Asset safety inspections and regulatory compliance</li>
        <li>Advanced analytics for operational efficiency</li>
      </ul>
      <p className="text-secondary">Our goal is to help energy companies operate safely, efficiently, and profitably.</p>
    </div>
  </div>

  {/* Section 3 - Image Left, Content Right */}
  <div className="row align-items-center mb-5">
    <div className="col-md-6">
      <img src="/images/refinery.jpg" alt="Downstream Solutions" className="img-fluid rounded shadow" />
    </div>
    <div className="col-md-6 text-start text-white">
      <h3 className="fw-bold">Refining & Delivery – Downstream Solutions</h3>
      <ul className="text-secondary">
        <li>Process automation and control systems</li>
        <li>Emission reduction technologies</li>
        <li>Product quality monitoring and assurance</li>
        <li>Supply chain and logistics planning</li>
        <li>Customer delivery tracking tools</li>
      </ul>
    </div>
  </div>

  {/* Section 4 - Content Left, Image Right */}
  <div className="row align-items-center flex-md-row-reverse mb-5">
    <div className="col-md-6">
      <img src="/images/iot-ai.jpg" alt="Smart Energy Tech" className="img-fluid rounded shadow" />
    </div>
    <div className="col-md-6  text-start text-white">
      <h3 className="fw-bold">Smart Technology Makes Energy Smarter</h3>
      <ul className="text-secondary">
        <li>IoT for equipment tracking and condition monitoring</li>
        <li>AI & machine learning for predictive insights</li>
        <li>Cloud-based platforms for real-time decision-making</li>
        <li>Digital twins for virtual simulation and project modeling</li>
      </ul>
    </div>
  </div>

  {/* Section 5 - Image Left, Content Right */}
  <div className="row align-items-center mb-5">
    <div className="col-md-6">
      <img src="/images/hse.jpg" alt="HSE Practices" className="img-fluid rounded shadow" />
    </div>
    <div className="col-md-6 text-start text-white">
      <h3 className="fw-bold">Health, Safety & Environment (HSE)</h3>
      <p className="text-secondary">
        The oil and gas sector comes with inherent risks. At Capyngen, HSE is a core priority across all solutions.
      </p>
      <ul className="text-secondary">
        <li>Workplace safety audits and monitoring</li>
        <li>Emergency response strategy and planning</li>
        <li>Employee safety training and certifications</li>
        <li>Environmental impact control and compliance</li>
        <li>Global safety regulation adherence</li>
      </ul>
    </div>
  </div>

  {/* Section 6 - Content Left, Image Right */}
  <div className="row align-items-center flex-md-row-reverse mb-5">
    <div className="col-md-6">
      <img src="/images/engineering.jpg" alt="Technical Services" className="img-fluid rounded shadow" />
    </div>
    <div className="col-md-6 text-start text-white">
      <h3 className="fw-bold">Engineering & Technical Services</h3>
      <ul className="text-secondary">
        <li>End-to-end engineering design and planning</li>
        <li>Procurement and vendor management</li>
        <li>Construction oversight and project delivery</li>
        <li>Turnaround management and optimization</li>
        <li>Quality control and on-time project execution</li>
      </ul>
      <p className="text-secondary">
        Our engineering teams deliver complex energy projects—on budget, on schedule, and with excellence.
      </p>
    </div>
  </div>

</div>

      {/* Emphasis Text */}
      <div className="container py-3">
        <p className="text-center" style={{ color: '#91c4ffe9' }}>
          Our commitment to excellence drives every aspect of our business.
</p>
      </div>

      {/* Why Capyngen Section */}
      <div className="container my-5">
        <div className="row rounded p-4 align-items-center" style={{backgroundColor:'#111111ff'}}>
          <div className="col-md-6 text-white">
            <h4>Why Choose Capyngen?</h4>
            <ul>
        <li><strong>End-to-End Support:</strong> From sourcing to delivery, we manage everything seamlessly.</li>
  <li><strong>Tech-Driven Efficiency:</strong> We leverage smart tools for optimized results.</li>
  <li><strong>Safety First:</strong> Strict adherence to HSE (Health, Safety & Environment) standards.</li>
  <li><strong>Client-Centric Solutions:</strong> Custom-tailored services to meet your exact needs.</li>
  <li><strong>Global Reach, Local Expertise:</strong> Regional know-how with worldwide operations.</li>
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

      <div className="text-center py-4 "style={{ color: '#91c4ffe9' }}>
        <p>
            Our commitment to excellence drives every aspect of our business.
        </p>
  
</div>
    </div>
  );
};

export default OilGas;
