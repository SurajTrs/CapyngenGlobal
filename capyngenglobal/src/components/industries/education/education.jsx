import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style.css';
const Education = () => {
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
        <h1 className="display-4 fw-bold">Education Technology Solutions</h1>
        <p className="lead">
Change the Way We Learn with New Ideas and Customized Learning        </p>
        <button className="btn btn-primary mt-3">Let's Talk →</button>
      </div>

      {/* Intro Paragraph */}
      <div className="container py-4">
        <p className="text-center text-secondary">
        Capyngen is leading the way in changing education with Best Education Technology Solutions and scalable Learning Management System Development that provide both students and teachers more authority. Schools need smart, responsive technologies to stay up as classes move online and learning becomes more individualized.
        </p>
      </div>

      {/* Core Skills */}
      <div className="container py-5">
        <h3 className="fw-bold text-start text-white">Key Offerings:</h3>
        <ul className="text-secondary">
           <li>Building a custom Learning Management System with access depending on roles</li>
  <li>Mobile-first e-learning applications for iOS and Android</li>
  <li>Integration of chat, whiteboards, and breakout sessions into live classrooms</li>
  <li>Digital content libraries that keep track of several versions</li>
  <li>Smart tools for proctoring exams and automated tests</li>
  <li>Suggestions for learning paths based on AI</li>
  <li>Dashboards for teachers and administrators in schools</li>
  <li>Make sure student information systems are safe</li>
        </ul>
      </div>

      {/* Emphasis Text */}
      <div className="container py-3">
        <p className="text-center" style={{ color: '#91c4ffe9' }}>
         Our Best Education Technology Solutions include gamification, tailored suggestions, and rewards based on success to keep learners interested. With Learning Management System Development, we make it possible for hybrid, live, and asynchronous learning models to all be controlled and reported from one place.
        </p>
      </div>

      {/* Why Capyngen Section */}
      <div className="container my-5">
        <div className="row rounded p-4 align-items-center" style={{backgroundColor:'#111111ff'}}>
          <div className="col-md-6 text-white">
            <h4>Why Capyngen?</h4>
            <ul>
           <li>A proven track record in the Best Education Technology Solutions in India and throughout the world</li>
  <li>Development of a cloud-based Learning Management System that can sync offline</li>
  <li>Real-time data analysis to keep an eye on how well students are doing and how likely they are to drop out</li>
  <li>Secure login systems and data privacy</li>
  <li>User interfaces that work in more than one language and on mobile devices</li>
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
       It is straightforward to grow, upgrade, and connect Capyngen's platforms to other academic systems. We make sure that your school has the most up-to-date features in Learning Management System Development, such as AI tutors, automated assignments, feedback tools, and parental access.
      </div>
    </div>
  );
};

export default Education;
