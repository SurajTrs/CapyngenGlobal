import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style.css';

const LifeScience = () => {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <div
        className="text-white d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(11, 42, 76, 0.9)), url("/background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '60vh',
          flexDirection: 'column',
          display: 'flex',
          textAlign: 'center',
        }}
      >
        <h1 className="display-4 fw-bold">Life Sciences</h1>
        <p className="lead">
          Capyngen helps accelerate innovation, improve patient outcomes, and streamline life sciences operations.
        </p>
        <button className="btn btn-primary mt-3">Let's Talk →</button>
      </div>

      {/* Intro Paragraph */}
      <div className="container py-4">
        <p className="text-center text-secondary">
          From drug discovery to patient care, life sciences is about saving lives and advancing health. Capyngen provides intelligent, secure, and compliant digital solutions for pharmaceutical, biotech, and med-tech companies.
        </p>
      </div>

      <div className="container py-5">
        {/* Section 1 */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img src="/images/clinical-research.jpg" alt="Research & Development" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6 text-start text-white">
            <h3 className="fw-bold">Faster Drug Discovery & Development</h3>
            <p className="text-secondary">
              Modernizing R&D with AI, big data, and collaborative platforms.
            </p>
            <ul className="text-secondary">
              <li>Clinical trial automation</li>
              <li>Predictive analytics for compound success</li>
              <li>Digital labs and ELNs</li>
              <li>Collaboration tools for research teams</li>
            </ul>
          </div>
        </div>

        {/* Section 2 */}
        <div className="row align-items-center flex-md-row-reverse mb-5">
          <div className="col-md-6">
            <img src="/images/compliance.jpg" alt="Compliance & Regulation" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6 text-start text-white">
            <h3 className="fw-bold">Regulatory Compliance Made Simple</h3>
            <ul className="text-secondary">
              <li>21 CFR Part 11 and HIPAA compliance</li>
              <li>Validated systems with full traceability</li>
              <li>Audit-ready digital logs</li>
              <li>Automated document control</li>
            </ul>
            <p className="text-secondary">
              Capyngen ensures every process is secure, traceable, and compliant.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img src="/images/supply-chain.jpg" alt="Life Science Supply Chain" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6 text-start text-white">
            <h3 className="fw-bold">Supply Chain Visibility & Control</h3>
            <ul className="text-secondary">
              <li>Track-and-trace from lab to shelf</li>
              <li>Cold chain monitoring via IoT</li>
              <li>Blockchain for authenticity and transparency</li>
              <li>Forecasting tools for inventory and demand</li>
            </ul>
          </div>
        </div>

        {/* Section 4 */}
        <div className="row align-items-center flex-md-row-reverse mb-5">
          <div className="col-md-6">
            <img src="/images/patient-care.jpg" alt="Connected Patient Services" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6 text-start text-white">
            <h3 className="fw-bold">Connected Patient Services</h3>
            <ul className="text-secondary">
              <li>Remote patient monitoring</li>
              <li>Wearable health tech integration</li>
              <li>Patient engagement and adherence tools</li>
              <li>Secure telemedicine platforms</li>
            </ul>
            <p className="text-secondary">
              Keep patients informed, involved, and healthy with digital-first care.
            </p>
          </div>
        </div>
      </div>

      {/* Emphasis Text */}
      <div className="container py-3">
        <p className="text-center" style={{ color: '#91c4ffe9' }}>
          The future of medicine is digital — Capyngen gets you there faster.
        </p>
      </div>

      {/* Why Capyngen */}
      <div className="container my-5">
        <div className="row rounded p-4 align-items-center" style={{ backgroundColor: '#111111ff' }}>
          <div className="col-md-6 text-white">
            <h4>Why Choose Capyngen for Life Sciences?</h4>
            <ul>
              <li><strong>Validated Digital Solutions:</strong> Purpose-built for pharma and biotech workflows.</li>
              <li><strong>Compliance-First Approach:</strong> Regulations are built into every product.</li>
              <li><strong>Secure & Scalable:</strong> Cloud-native infrastructure with end-to-end security.</li>
              <li><strong>Patient-Focused:</strong> Digital tools to improve real outcomes.</li>
              <li><strong>Speed to Innovation:</strong> We accelerate development cycles and reduce cost.</li>
            </ul>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1588776814546-ec6f7c70b7b8"
              className="img-fluid rounded shadow"
              alt="Life Sciences Tech"
            />
          </div>
        </div>
      </div>

      <div className="text-center py-4" style={{ color: '#91c4ffe9' }}>
        <p>Innovation, health, and compliance — all in one platform.</p>
      </div>
    </div>
  );
};

export default LifeScience;
