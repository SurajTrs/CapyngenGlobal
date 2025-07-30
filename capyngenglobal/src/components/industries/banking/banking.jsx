import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style.css';
const BankingIndustryPage = () => {
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
        <h1 className="display-4  fw-bold">Banking Industry</h1>
        <p className="lead">
          Banking Experiences That Are Ready for the Future – Technology is What Makes It Work
        </p>
        <button className="btn btn-primary mt-3">Let's Talk →</button>
      </div>

      {/* Intro Paragraph */}
      <div className="container py-4">
        <p className="text-center text-secondary">
          The financial world is changing quickly, and Capyngen is at the forefront of this change
          with its Best Mobile Banking App Development and Best Banking Technology Solutions, which
          change the way banks do business and interact with clients. As more people want to make
          digital payments, have customized banking, and follow the rules, we assist conventional
          banks, NBFCs, and fintechs move to safe, scalable, and user-friendly systems.
        </p>
      </div>

      {/* Core Skills */}
      <div className="container py-3">
        <h3 className="fw-bold text-start text-white">Core Skills:</h3>
        <ul className="text-secondary">
          <li>Making the Best Mobile Banking Apps for Android and iOS</li>
          <li>Updating and integrating the core financial system</li>
          <li>Chatbots and voice assistants that use AI</li>
          <li>Tools for KYC and AML verification in real time</li>
          <li>Identity and transaction systems that use blockchain</li>
          <li>Digital wallets and payment gateway integration</li>
          <li>Open banking ecosystems that are powered by APIs</li>
          <li>Solutions for finding fraud and keeping computers safe</li>
        </ul>
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
            <h4>Why Capyngen for Banking Technology?</h4>
            <ul>
              <li>
                A trusted partner in providing the Best Banking Technology Solutions for regulated
                organizations
              </li>
              <li>RBI, SEBI, and a system design that works all around the world</li>
              <li>AI-based analysis for rating risks and evaluating loans</li>
              <li>Infrastructure that can grow and enable updates in the future</li>
              <li>24/7 mobile banking and the ability to use many channels</li>
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

export default BankingIndustryPage;
