import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style.css';
const ConsumerPackage = () => {
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
        <h1 className="display-4 fw-bold">Consumer Goods and Distribution</h1>
        <p className="lead">
Our IT solutions for consumer packaged goods can help you run your business more smoothly.</p>
        <button className="btn btn-primary mt-3">Let's Talk →</button>
      </div>

      {/* Intro Paragraph */}
      <div className="container py-4">
        <p className="text-center text-secondary">
The Consumer Packaged Goods and Distribution industry has to deal with problems with supply chain efficiency, market responsiveness, and making things personal for customers all the time. Capyngen offers smart, scalable IT solutions for consumer packaged goods that help businesses change the way they do business from start to finish.</p>
      </div>

      {/* Core Skills */}
      <div className="container py-5">
        <h3 className="fw-bold text-start text-white">Our Offerings Include:</h3>
        <ul className="text-secondary">
          <li className="mb-3">POS and CRM systems that work together</li>
      <li className="mb-3">Order management systems that run in the cloud</li>
      <li className="mb-3">Tools for Predictive Demand Forecasting</li>
      <li className="mb-3">Route Optimisation and Delivery Tracking</li>
        </ul>
      </div>

      {/* Emphasis Text */}
      <div className="container py-3">
        <p className="text-center" style={{ color: '#91c4ffe9' }}>
Advanced Inventory Optimisation Solutions are a key part of our Consumer Packaged Goods IT Solutions. These systems look at how well inventory is doing in real time, which helps businesses keep the right</p>
        <p className="text-center" style={{ color: '#376ff3e9' }}>
amount of stock on hand at the right time, cutting down on both overstocking and stock-outs. You can speed up order fulfilment, cut down on waste, and make customers happier by adding Inventory Optimisation Solutions to your supply chain.</p>
      </div>

      {/* Why Capyngen Section */}
      <div className="container my-5">
        <div className="row rounded p-4 align-items-center" style={{backgroundColor:'#111111ff'}}>
          <div className="col-md-6 text-white">
            <h4>Why should you use our CPG technology services?</h4>
            <ul>
        <li className="mb-3">We make platforms that are specific to the FMCG, retail, beverage, and personal care industries.</li>
      <li className="mb-3">Our Inventory Optimisation Solutions keep up with changes in demand and supply.</li>
      <li className="mb-3">Our solutions work with ERP, WMS, and other logistics platforms from other companies.</li>
      <li className="mb-3">We make it possible to see operational and marketing data in real time.</li>
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
Capyngen's Consumer Packaged Goods IT Solutions turn regular supply chains into smart ecosystems. Our tools are made for the changing world of Consumer Packaged Goods and Distribution, and they help with smart growth, real-time insights, and automation.
 </div>
    </div>
  );
};

export default ConsumerPackage;
