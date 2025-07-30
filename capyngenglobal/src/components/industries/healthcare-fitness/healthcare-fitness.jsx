import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style.css';
const HealthCare = () => {
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
        <h1 className="display-4 fw-bold">Health and Fitness</h1>
        <p className="lead">
Our best healthcare IT solutions help make the world a healthier place.</p>
        <button className="btn btn-primary mt-3">Let's Talk →</button>
      </div>

      {/* Intro Paragraph */}
      <div className="container py-4">
        <p className="text-center text-secondary">
The digital age is changing the way healthcare and fitness services are provided. At Capyngen, we make the best healthcare IT solutions and fitness app development platforms that help providers, patients, and fitness users connect, work together, and do well.        </p>
      </div>

      {/* Core Skills */}
      <div className="container py-5">
        <h3 className="fw-bold text-start text-white">Our Health and Fitness Services:</h3>
        <ul className="text-secondary">
          <li>Platforms for telehealth and remote monitoring</li>
  <li>Electronic health record systems that follow HIPAA rules</li>
  <li>Medical analytics tools that use AI</li>
  <li>Making fitness apps that work on more than one platform</li>
  <li>Integration of medical devices and wearables</li>
        </ul>
      </div>

      {/* Emphasis Text */}
      <div className="container py-3">
        <p className="text-center" style={{ color: '#91c4ffe9' }}>
Capyngen makes the best healthcare IT solutions that are made to work with the real-world problems of the medical field. These solutions improve patient care, make it easier to make decisions quickly, and make sure that they work well with other platforms like labs, insurance portals, and pharmacies.        </p>
      </div>
 <div className="container py-3">
        <p className="text-center" style={{ color: '#376ff3e9' }}>
Our Best Fitness App Development services combine good design, easy use, and strong backend functionality. We make fitness platforms that work on multiple devices and wearables. These platforms track workouts, monitor vital signs, and give users personalised fitness experiences</p>
      </div>
      {/* Why Capyngen Section */}
      <div className="container my-5">
        <div className="row rounded p-4 align-items-center" style={{backgroundColor:'#111111ff'}}>
          <div className="col-md-6 text-white">
            <h4>Why Pick Capyngen?</h4>
            <ul>
        <li>Our solutions are safe, can grow with your needs, and follow all healthcare rules.</li>
  <li>We help with every step of the lifecycle, from planning to deployment.</li>
  <li>Our fitness apps work with Apple Health, Google Fit, and the most popular wearable devices.</li>
  <li>User experience, speed, and security are the main goals of our Medical App Development Services.</li>
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
Capyngen's Best Healthcare IT Solutions and Best Fitness App Development services can help you make your idea a reality, whether it's a hospital platform, a wellness app, or a smart diagnosis tool. Let our team make strong and dependable systems for your next healthcare or fitness experience.      </div>
    </div>
  );
};

export default HealthCare;
