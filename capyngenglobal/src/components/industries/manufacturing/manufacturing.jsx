import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style.css';
const Manufacturing = () => {
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
        <h1 className="display-4 fw-bold">Manufacturing</h1>
        <p className="lead">
Smart, connected, and able to grow with Our Smart Manufacturing IT Solutions</p>
        <button className="btn btn-primary mt-3">Let's Talk →</button>
      </div>

      {/* Intro Paragraph */}
      <div className="container py-4">
        <p className="text-center text-secondary">
Manufacturing has become a digital ecosystem where data, automation, and flexibility are more important than ever. With "Industry 4.0" leading the way, our Manufacturing IT Solutions help businesses adapt to this change by giving them real-time control, predictive intelligence, and connected workflows from ERP to the shop floor.
</p>

      </div>
      <h1 className='text-primary text-center'>
    What Our Manufacturing Platform Can Do for You
</h1>

<div className="container py-5">

  {/* Section 1 - Image Left, Content Right */}
  <div className="row align-items-center mb-5">
    <div className="col-md-6">
      <img src="/images/oil-gas.jpg" alt="Oil & Gas" className="img-fluid rounded shadow" />
    </div>
    <div className="col-md-6 text-start text-white">
      <h3 className="fw-bold">Integration of Industrial IoT and Smart Factory</h3>
      <ul className="text-secondary">
        <li>IoT gateways connect legacy machines with modern sensors.</li>
        <li>Real-time data on performance, energy consumption, and environment.</li>
        <li>Live visibility into machine uptime, production bottlenecks, and quality metrics.</li>
      </ul>
    </div>
  </div>

  {/* Section 2 - Content Left, Image Right */}
  <div className="row align-items-center flex-md-row-reverse mb-5">
    <div className="col-md-6">
      <img src="/images/exploration.jpg" alt="Upstream Solutions" className="img-fluid rounded shadow" />
    </div>
    <div className="col-md-6 text-white">
      <h3 className="fw-bold">Manufacturing Execution Systems (MES)</h3>
      <ul className="text-secondary">
        <li>Production scheduling, work-in-progress tracking, and full traceability.</li>
        <li>Process standardization, error reduction, and regulatory adherence.</li>
      </ul>
      <p className="text-secondary">Our MES streamlines shop floor operations for full control and visibility.</p>
    </div>
  </div>

  {/* Section 3 - Image Left, Content Right */}
  <div className="row align-items-center mb-5">
    <div className="col-md-6">
      <img src="/images/erp.jpg" alt="ERP Integration" className="img-fluid rounded shadow" />
    </div>
    <div className="col-md-6 text-white">
      <h3 className="fw-bold">ERP and Supply Chain Synchronization</h3>
      <ul className="text-secondary">
        <li>Seamless connection of purchasing, inventory, logistics, and finance.</li>
        <li>Demand forecasting and supplier visibility with real-time insights.</li>
      </ul>
    </div>
  </div>

  {/* Section 4 - Content Left, Image Right */}
  <div className="row align-items-center flex-md-row-reverse mb-5">
    <div className="col-md-6">
      <img src="/images/maintenance.jpg" alt="Predictive Maintenance" className="img-fluid rounded shadow" />
    </div>
    <div className="col-md-6 text-white">
      <h3 className="fw-bold">Predictive Maintenance and Downtime Reduction</h3>
      <ul className="text-secondary">
        <li>AI-driven analytics detect issues before failures occur.</li>
        <li>Preventive maintenance schedules lower operational costs.</li>
        <li>Prolonged equipment lifespan through proactive strategies.</li>
      </ul>
    </div>
  </div>

  {/* Section 5 - Image Left, Content Right */}
  <div className="row align-items-center mb-5">
    <div className="col-md-6">
      <img src="/images/quality.jpg" alt="Quality Control" className="img-fluid rounded shadow" />
    </div>
    <div className="col-md-6 text-white">
      <h3 className="fw-bold">Quality Control and Compliance Dashboards</h3>
      <ul className="text-secondary">
        <li>Monitor defect rates, yield metrics, and corrective actions in real-time.</li>
        <li>Effortless compliance with ISO, FDA, and industry-specific audits.</li>
      </ul>
    </div>
  </div>



</div>


      {/* Emphasis Text */}
      <div className="container py-3">
        <p className="text-center" style={{ color: '#91c4ffe9' }}>
Unlock the full potential of your operations with our cutting-edge solutions.
</p>
      </div>

      {/* Why Capyngen Section */}
      <div className="container my-5">
        <div className="row rounded p-4 align-items-center" style={{backgroundColor:'#111111ff'}}>
          <div className="col-md-6 text-white">
            <h4>Why Our Manufacturing IT Solutions Work</h4>
         <ul>
  <li><strong>Scalable Architecture:</strong> Our systems can grow with you, from small plants to big businesses.</li>
  <li><strong>Seamless Integration:</strong> We connect PLCs, SCADA, and ERP without having to replace your systems.</li>
  <li><strong>User-Friendly Dashboards:</strong> Both shop-floor workers and managers get information that is specific to their needs.</li>
  <li><strong>Quick Return on Investment:</strong> Less scrap, more efficient throughput, and fewer interruptions all lead to measurable results.</li>
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
            Ready to see the impact of our solutions?
        </p>
  
</div>
    </div>
  );
};

export default Manufacturing;
