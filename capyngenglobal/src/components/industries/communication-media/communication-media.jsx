import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style.css';
const CommunicationMedia = () => {
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
        <h1 className="display-4 fw-bold">Communications, Media, and Information Services</h1>
        <p className="lead">
communication is a strategic advantage, not just a task
</p>
        <button className="btn btn-primary  mt-3">Let's Talk →</button>
      </div>

      {/* Intro Paragraph */}
      <div className="container py-5">
        <p className="text-center text-secondary">
         Our Communications, Media, and Information Services unit is crucial for supporting our international clients. We achieve this through the instant sharing of information, a strong media framework, and prioritizing regulatory adherence. Within today’s connected financial landscape, we guarantee that all data, notifications, and market information are delivered safely, immediately, and precisely.
        </p>
      </div>

      {/* Core Skills */}
  <div className="container py-3">
  <div className="row">
    <div className="col-md-6 text-start">
      <h3 className="fw-bold text-white text-start">Driving Communication with Purpose</h3>
      <ul className="text-secondary">
        <li>
          In the world of finance and trading, access to accurate and timely information can define success. Our systems operate with this core idea at the forefront. The Capyngen communication framework is crafted to provide the most effective and dependable pathways for traders, institutions, and collaborators globally. We offer multiple language options, AI-driven chat systems, intelligent notifications, and direct market access, ensuring you're informed and ready.
        </li>
      </ul>
    </div>
  </div>
</div>

    {/* Core Skills */}
  <div className="container py-3">
  <div className="row">
    <div className="col-md-6 text-start">
      <h3 className="fw-bold text-start text-white">Full Compliance, Global Security</h3>
      <ul className="text-secondary">
        <li>
Our communications infrastructure is rapid and strictly adheres to the most demanding global regulatory requirements. We operate in compliance with MiFID II, GDPR, SEBI, FCA, and other legal standards. Therefore, your data is secure, your privacy is protected, and every interaction aligns with the best international practices.
        </li>
      </ul>
    </div>
  </div>
</div>



  <div className="container py-3">
  <div className="row">
    <div className="col-md-6 text-start">
      <h3 className="fw-bold text-start text-white">Real-Time Market Intelligence</h3>
      <ul className="text-secondary">
        <li>
Capyngen delivers a full suite of instant market insights. We offer real-time news, expert analysis, economic calendar details, and AI-powered sentiment analysis, all directly incorporated into your trading platform. This steady stream of carefully curated information helps you manage volatile markets, understand global events, and place well-informed trades.        </li>
      </ul>
    </div>
  </div>
</div>

  <div className="container py-3">
  <div className="row">
    <div className="col-md-6 text-start">
      <h3 className="fw-bold text-start text-white">Open Information Access</h3>
      <ul className="text-secondary">
        <li>
Transparency is a central value at Capyngen. Clients are always well-informed. We provide full access to logs of communication, reports on order execution, historical pricing data, and metrics on latency. Using our DMA and raw spread pricing, you see everything—no hidden charges, no spread manipulation, and no dealing desk involvement.</li>
      </ul>
    </div>
  </div>
</div>


  <div className="container py-3">
  <div className="row">
    <div className="col-md-6 text-start">
      <h3 className="fw-bold text-start text-white">Pioneering a New Perspective</h3>
      <ul className="text-secondary">
        <li>
Capyngen develops its media and information systems with change and flexibility at the forefront. Whether you're breaking into fresh markets, scaling your business, or automating trades, our systems are designed to scale alongside your needs.</li>
      </ul>
    </div>
  </div>
</div>







      {/* Emphasis Text */}
      <div className="container py-3">
        <p className="text-center" style={{ color: '#91c4ffe9' }}>
          We make sure that every Best Mobile Banking App Development we do is focused on the user<br/>
          experience, security, and compliance. To meet the needs of different customers, our<br/>
          solutions enable multi-factor authentication, real-time notifications, and interfaces in
          several languages.
        </p>
      </div>

      {/* Why Capyngen Section */}
      <div className="container my-5">
        <div className="row rounded p-4 align-items-center" style={{backgroundColor:'#111111ff'}}>
          <div className="col-md-6 text-white">
            <h4>Why Capyngen Stands Out</h4>
            <ul>
              <li>
               Communication infrastructure designed for compliance
              </li>
              <li>Instant global news and sentiment analysis</li>
              <li>Top-level security setup for all data transfer</li>
              <li>Regulatory adherence, including FCA, SEBI, MiFID II, GDPR, and others</li>
              <li>Clear pricing, execution, and reporting practices</li>
              <li>Fully adjustable solutions for all traders</li>
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
        Capyngen has the Best Banking Technology Solutions for private banks,<br/> cooperative banks,
        NBFCs, and fintech startups.<br/>These solutions are designed to grow with your business.
      </div>
    </div>
  );
};

export default CommunicationMedia;
