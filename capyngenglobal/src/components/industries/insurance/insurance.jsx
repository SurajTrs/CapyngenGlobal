import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style.css';

const Insurance = () => {
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
        <h1 className="display-4 fw-bold">Insurance</h1>
        <p className="lead">Innovative IT solutions for a secure tomorrow.</p>
        <button className="btn btn-primary mt-3">Let's Talk →</button>
      </div>

      {/* Intro Paragraph */}
      <div className="container py-4">
        <p className="text-center text-secondary">
          The insurance industry is rapidly evolving, driven by changing customer expectations and technological advancements. From personalized policies to faster claims processing, the demand for efficiency and security is paramount. We provide cutting-edge IT solutions that empower insurance providers to meet these challenges, enhance customer experience, and streamline operations.
        </p>
      </div>

      {/* What Our Insurance Solutions Offer */}
      <div className="container py-5">
        <h2 className="fw-bold text-center text-primary mb-4">What Our Insurance Solutions Offer</h2>

        {/* Service 1 - Policy Management Systems */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-start">
            <h5 className="fw-bold">Policy Management Systems</h5>
            <p className="text-secondary">Our comprehensive policy management systems automate the entire policy lifecycle, from quoting and underwriting to issuance and renewals. Features include dynamic pricing, custom policy generation, and integration with various payment gateways.</p>
          </div>
          <div className="col-md-6">
            <img src="/images/policy-management.jpg" alt="Policy Management Systems" className="img-fluid rounded shadow" />
          </div>
        </div>

        {/* Service 2 - Claims Processing and Automation */}
        <div className="row align-items-center flex-md-row-reverse mb-5">
          <div className="col-md-6 text-start">
            <h5 className="fw-bold">Claims Processing and Automation</h5>
            <p className="text-secondary">Accelerate claims processing with intelligent automation. Our solutions utilize AI and machine learning for fraud detection, automated claim verification, and faster payouts, significantly improving customer satisfaction.</p>
          </div>
          <div className="col-md-6">
            <img src="/images/claims-processing.jpg" alt="Claims Processing" className="img-fluid rounded shadow" />
          </div>
        </div>

        {/* Service 3 - Customer Relationship Management (CRM) */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-start">
            <h5 className="fw-bold">Customer Relationship Management (CRM)</h5>
            <p className="text-secondary">Build stronger customer relationships with our tailored CRM solutions. Manage customer interactions, track preferences, and offer personalized services to improve retention and loyalty.</p>
          </div>
          <div className="col-md-6">
            <img src="/images/insurance-crm.jpg" alt="Insurance CRM" className="img-fluid rounded shadow" />
          </div>
        </div>

        {/* Service 4 - Data Analytics and Business Intelligence */}
        <div className="row align-items-center flex-md-row-reverse mb-5">
          <div className="col-md-6 text-start">
            <h5 className="fw-bold">Data Analytics and Business Intelligence</h5>
            <p className="text-secondary">Leverage powerful data analytics to gain insights into market trends, customer behavior, and risk assessment. Our BI tools provide actionable dashboards for informed decision-making and strategic planning.</p>
          </div>
          <div className="col-md-6">
            <img src="/images/data-analytics.jpg" alt="Data Analytics" className="img-fluid rounded shadow" />
          </div>
        </div>

        {/* Service 5 - Regulatory Compliance and Security */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-start">
            <h5 className="fw-bold">Regulatory Compliance and Security</h5>
            <p className="text-secondary">Ensure adherence to industry regulations and data security standards (e.g., GDPR, HIPAA). Our solutions are built with robust security measures to protect sensitive customer information and maintain compliance.</p>
          </div>
          <div className="col-md-6">
            <img src="/images/compliance-security.jpg" alt="Regulatory Compliance and Security" className="img-fluid rounded shadow" />
          </div>
        </div>

      </div>

      {/* Why Choose Our Insurance Solutions */}
      <div className="container my-5">
        <div className="row rounded p-4 align-items-center" style={{ backgroundColor: '#111111ff' }}>
          <div className="col-md-6 text-white">
            <h4>Why Choose Our Insurance Solutions</h4>
            <ul>
              <li className="mb-3"> <strong>Enhanced Efficiency:</strong> Automate workflows to reduce manual effort and improve operational speed.</li>
              <li className="mb-3"> <strong>Superior Customer Experience:</strong> Provide seamless and personalized interactions from policy purchase to claims.</li>
              <li className="mb-3"> <strong>Robust Security:</strong> Implement industry-leading security protocols to protect sensitive data.</li>
              <li className="mb-3"> <strong>Scalability and Flexibility:</strong> Solutions designed to adapt and grow with your business needs.</li>
              <li className="mb-3"> <strong>Data-Driven Insights:</strong> Utilize advanced analytics for better risk assessment and strategic decisions.</li>
            </ul>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1554224155-1f2280d0d62d" // Placeholder for why choose us
              className="img-fluid rounded shadow"
              alt="Why Choose Us"
            />
          </div>
        </div>
      </div>

      {/* Final Text */}
      <div className="text-center py-4" style={{ color: '#91c4ffe9' }}>
        <p>Future-proof your insurance business with our innovative and reliable IT solutions.</p>
      </div>
    </div>
  );
};

export default Insurance;