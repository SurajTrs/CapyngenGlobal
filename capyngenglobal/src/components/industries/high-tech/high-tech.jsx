import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style.css';
const HighTech = () => {
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
        <h1 className="display-4 fw-bold">High-Tech and Blockchain</h1>
        <p className="lead">
your partner in coming up with new ideas in the blockchain and high-tech fields.
</p>
        <button className="btn btn-primary mt-3">Let's Talk →</button>
      </div>

      {/* Intro Paragraph */}
      <div className="container py-4">
        <p className="text-center text-secondary">
Businesses need more than just technology in today's fast-paced digital world; they need a partner who can help them make changes. Capyngen is that partner, giving businesses in all fields access to the latest High-Tech and Blockchain solutions</p>
      </div>

<h1 className='text-primary text-center'>
    How Capyngen is leading the way in high-tech innovation
</h1>
 <div className="container py-4">
        <p className="text-center text-secondary">
Capyngen helps companies make a big change to their digital systems by using new technologies like AI, ML, IoT, robotics, and big data. These tools help you make better choices, run your business more smoothly, and upgrade old systems.

</p>
      </div>

<div className="container py-5">

  {/* Section 1 - Image Left, Content Right */}
  <div className="row align-items-center mb-5">
    <div className="col-md-6">
      <img src="/images/oil-gas.jpg" alt="Oil & Gas" className="img-fluid rounded shadow" />
    </div>
    <div className="col-md-6 text-start text-white">
      <h3 className="fw-bold text-start"> Smart Automation</h3>
      <p className="text-secondary">
You can automate boring tasks and cut down on downtime with Capyngen's smart systems. We made our AI-powered tools to help you plan maintenance, use your resources better, and get more done.

      </p>
     
    </div>
  </div>

  {/* Section 2 - Content Left, Image Right */}
  <div className="row align-items-center flex-md-row-reverse mb-5">
    <div className="col-md-6">
      <img src="/images/exploration.jpg" alt="Upstream Solutions" className="img-fluid rounded shadow" />
    </div>
    <div className="col-md-6 text-start text-white">
      <h3 className="fw-bold text-start"> Digital Twins</h3>
     
      <p className="text-secondary">Our Digital Twin technology makes digital copies of your physical assets that are always current. Keep an eye on how things are going, guess what will happen, and make places like oil and gas facilities, logistics hubs, and manufacturing plants work better.</p>
    </div>
  </div>

  {/* Section 3 - Image Left, Content Right */}
  <div className="row align-items-center mb-5">
    <div className="col-md-6">
      <img src="/images/refinery.jpg" alt="Downstream Solutions" className="img-fluid rounded shadow" />
    </div>
    <div className="col-md-6 text-start text-white">
      <h3 className="fw-bold">Dashboards and analytics that work in real time</h3>
      
      <p className='text-secondary'>
        You can get the most out of your data with customizable dashboards. You can see how your business works, keep an eye on key performance indicators (KPIs), and make quick, confident decisions based on data with our analytics tools.
      </p>
    </div>
  </div>

  {/* Section 4 - Content Left, Image Right */}
 <div className="row align-items-center flex-md-row-reverse mb-5">
  <div className="col-md-6">
    <img src="/images/iot-ai.jpg" alt="Smart Energy Tech" className="img-fluid rounded shadow" />
  </div>
  <div className="col-md-6 text-start text-white">
    <h3 className="fw-bold mb-3 text-start">Smart Technology Makes Energy Smarter</h3>
    <h5 className="mb-2 ">Connecting IoT</h5>
    <p>
      You can use IoT sensors and platforms to watch over machines, keep track of logistics, 
      and make workflows run more smoothly. A lot of assets are useful in industries like 
      oil and gas, energy, and construction.
    </p>
  </div>
</div>


  {/* Section 5 - Image Left, Content Right */}
<div className="row align-items-center mb-5">
  <div className="col-md-6">
    <img src="/images/hse.jpg" alt="HSE Practices" className="img-fluid rounded shadow" />
  </div>
  <div className="col-md-6 text-start text-white">
   

    <h5 className="mt-4 text-start">Smart Predictions with AI and ML</h5>
    <p className='text-secondary'>
      Predictive analytics can help you figure out how much demand there will be, make supply chains work better, 
      and make experiences more personal for users. With AI-enhanced automation and intelligent condition tracking, 
      we take efficiency and foresight to the next level.
    </p>
  </div>
</div>


  {/* Section 6 - Content Left, Image Right */}
<div className="row align-items-center flex-md-row-reverse mb-5">
  {/* Right Side Image (on desktop) */}
  <div className="col-md-6">
    <img src="/images/cybersecurity.jpg" alt="Cybersecurity Solutions" className="img-fluid rounded shadow" />
  </div>

  {/* Left Side Text */}
  <div className="col-md-6 text-start text-white">
    <h3 className="fw-bold">Cybersecurity for Companies</h3>
    <p className="text-secondary">
      All Capyngen solutions come with built-in multi-layered cybersecurity to protect against new threats,
      keep data safe, and meet all rules and regulations.
    </p>
  </div>
</div>


</div>

<h1 className='text-primary text-center'>
    Results that have been proven to work in many areas
</h1>
{/* Section - Impact of Capyngen's Blockchain & High-Tech Solutions */}
<div className="row align-items-center mb-5">
  {/* Image Right */}
  <div className="col-md-6">
    <img src="/images/blockchain.jpg" alt="Blockchain Impact" className="img-fluid rounded shadow" />
  </div>

  {/* Text Left */}
  <div className="col-md-6 text-start text-white">
    <h3 className="fw-bold">Impact of Blockchain & High-Tech Innovation</h3>
    <ul className="text-secondary">
      <li>AI and digital twins reduce equipment downtime by up to 70%.</li>
      <li>IoT and real-time analytics boost logistics accuracy by 45%.</li>
      <li>80% fewer fraud cases in banks using blockchain-based ID systems.</li>
      <li>Smart contracts accelerate compliance audits by 60%.</li>
      <li>Centralized dashboards double decision-making speed.</li>
    </ul>
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
            <h4>Why Businesses Use Capyngen?</h4>
            <ul>
          <li>Solutions that are specific to an industry</li>
      <li>Platforms that can grow and last for a long time</li>
      <li>Delivery of full service</li>
      <li>Pay attention to safety</li>
      <li>The Agile Way</li>
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

export default HighTech;
