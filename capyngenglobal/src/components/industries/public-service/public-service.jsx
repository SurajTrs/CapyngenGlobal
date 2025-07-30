import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style.css';

const PublicService = () => {
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
        <h1 className="display-4 fw-bold">Public Service</h1>
        <p className="lead">Our citizen-focused public service IT solutions help build trust, efficiency, and access.</p>
        <button className="btn btn-primary mt-3">Let's Talk →</button>
      </div>

      {/* Intro Paragraph */}
      <div className="container py-4">
        <p className="text-center text-secondary">
          Governments and public agencies are changing how people interact with them by moving away from forms and lines and toward digital-first, easy-to-use, and safe services. Our Public Service IT Solutions meet that need by providing platforms for smart infrastructure, healthcare, identity management, governance, and public utilities.
        </p>
      </div>

      {/* What Our Public Sector Solutions Offer */}
      <div className="container py-5">
        <h2 className="fw-bold text-center text-primary mb-4">What Our Public Sector Solutions Offer</h2>

        {/* Service 1 - Digital Citizen Portals and e-Governance */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-start">
            <h5 className="fw-bold">Digital Citizen Portals and e-Governance</h5>
            <p className="text-secondary">Our unified portals have apps for payments, licenses, certificates, and more. Some of the features are user authentication (mobile, digital ID), a UI that works in many languages, mobile responsiveness, and the ability to track and print receipts.</p>
          </div>
          <div className="col-md-6">
            <img src="/images/digital-citizen-portal.jpg" alt="Digital Citizen Portal" className="img-fluid rounded shadow" />
          </div>
        </div>

        {/* Service 2 - Systems for Citizen Complaints and Feedback */}
        <div className="row align-items-center flex-md-row-reverse mb-5">
          <div className="col-md-6 text-start">
            <h5 className="fw-bold">Systems for Citizen Complaints and Feedback</h5>
            <p className="text-secondary">Make things clear by letting people file problems, check their status, and give feedback. Alerts and reminders based on SLAs make sure that problems are fixed quickly and that people are held accountable.</p>
          </div>
          <div className="col-md-6">
            <img src="/images/citizen-feedback.jpg" alt="Citizen Complaints and Feedback" className="img-fluid rounded shadow" />
          </div>
        </div>

        {/* Service 3 - Platforms for Digital Identification and Enrollment */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-start">
            <h5 className="fw-bold">Platforms for Digital Identification and Enrollment</h5>
            <p className="text-secondary">Biometric registration, secure ID issuance, and linking to national ID databases. For registering voters, providing public services, helping people in need, and responding to emergencies.</p>
          </div>
          <div className="col-md-6">
            <img src="/images/digital-id.jpg" alt="Digital Identification" className="img-fluid rounded shadow" />
          </div>
        </div>

        {/* Service 4 - Monitoring Infrastructure and Billing for Public Utilities */}
        <div className="row align-items-center flex-md-row-reverse mb-5">
          <div className="col-md-6 text-start">
            <h5 className="fw-bold">Monitoring Infrastructure and Billing for Public Utilities</h5>
            <p className="text-secondary">Digital billing for water, electricity, and waste management, along with monitoring for leaks and meters. Dashboards that use GIS keep track of usage, find problems, and help with mobile servicing.</p>
          </div>
          <div className="col-md-6">
            <img src="/images/public-utilities-monitoring.jpg" alt="Public Utilities Monitoring" className="img-fluid rounded shadow" />
          </div>
        </div>

      </div>

      {/* Why Agencies Trust Our Public Service Solutions */}
      <div className="container my-5">
        <div className="row rounded p-4 align-items-center" style={{ backgroundColor: '#111111ff' }}>
          <div className="col-md-6 text-white">
            <h4>Why Agencies Trust Our Public Service Solutions</h4>
            <ul>
              <li className="mb-3"> <strong>Compliance and Security:</strong> Following data protection laws (like GDPR and local laws), encryption, and RBAC permissions.</li>
              <li className="mb-3"> <strong>Citizen-first UX:</strong> Easy to navigate, works on many devices, and is accessible in multiple languages and for people with disabilities.</li>
              <li className="mb-3"> <strong>Scalable and Modular:</strong> Our systems can grow with your needs, from apps for one department to digital IDs for the whole country.</li>
              <li className="mb-3"> <strong>Lifecycle Care:</strong> We offer onboarding, training, upgrades, and long-term support for our solutions.</li>
            </ul>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1579389083296-cb1731665e77" // Placeholder image for trust/security
              className="img-fluid rounded shadow"
              alt="Public Service Trust"
            />
          </div>
        </div>
      </div>

      {/* Final Text */}
      <div className="text-center py-4" style={{ color: '#91c4ffe9' }}>
        <p>Our commitment to excellence drives every aspect of our business.</p>
      </div>
    </div>
  );
};

export default PublicService;