import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style.css';
const TravelLogistics = () => {
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
        <h1 className="display-4 fw-bold">travel and logistics</h1>
        <p className="lead">
Connections that are smart, smooth, and last a long time</p>
        <button className="btn btn-primary mt-3">Let's Talk →</button>
      </div>

      {/* Intro Paragraph */}
      <div className="container py-4">
        <p className="text-center text-secondary">
The travel and logistics business is what keeps the world moving. It connects people, moves things, and makes trade between countries possible. We use the latest technology and a design that focuses on people to make this important field better. We make sure that everything is efficient, personalized, and lasts a long time.</p>

      </div>
      <h1 className='text-primary text-center'>
What Our Public Sector Solutions Offer</h1>

<div className="container py-5">

 {/* Section - Travel and Logistics (Text Left, Image Right) */}
<div className="row align-items-center flex-md-row-reverse mb-5">
  <div className="col-md-6">
    <img src="/images/logistics.jpg" alt="Travel and Logistics" className="img-fluid rounded shadow" />
  </div>
  <div className="col-md-6 text-white text-start">
    <h3 className="fw-bold mb-3">Travel and Logistics</h3>
    <h5 className="text-light-emphasis mb-3">Connections that are smart, smooth, and last a long time</h5>
    <p className="text-secondary mb-4">
      The travel and logistics business is what keeps the world moving. It connects people, moves things, 
      and makes trade between countries possible. We use the latest technology and a design that focuses on 
      people to make this important field better. We make sure that everything is efficient, personalized, 
      and lasts a long time.
    </p>

    <h5 className="fw-semibold text-white">What Our Public Sector Solutions Offer</h5>
    
    <p className="text-secondary mt-3">
      <strong>Technology-Driven Operations</strong><br />
      In the last ten years, travel and logistics have changed a lot. Capyngen is leading the way in this 
      change by offering GPS-enabled tracking, real-time updates, and AI-powered systems for managing fleets 
      and warehouses. These tools help things go faster, make things more accurate, and take the guesswork out of things.
    </p>

    <p className="text-secondary">
      <strong>Travel Experiences That Are Unique to You</strong><br />
      People who travel today want experiences that are made just for them. It doesn't matter if you're going 
      on a business trip or a vacation; personalization is important. Capyngen uses AI to look at what people 
      like and suggest flights, hotels, activities, and itineraries right away.
    </p>

    <p className="text-secondary">
      <strong>Travel and Logistics That Last</strong><br />
      Sustainability is no longer an option; it is a requirement. Capyngen helps travel and logistics companies 
      lower their carbon footprint by using renewable energy, green delivery vehicles, and optimized routes, as 
      well as by offering carbon offset programs. Our technology makes sure that performance and long-term 
      viability are always linked.
    </p>

    <p className="text-secondary">
      <strong>Backing for a Reliable Supply Chain</strong><br />
      Because e-commerce is growing, people expect quick and accurate deliveries. Smart warehouse solutions, 
      automated fulfillment, and real-time tracking of deliveries are some of the ways that Capyngen helps 
      businesses meet this need. Our systems let us keep costs low and accuracy high while still getting things 
      to you on the same day or the next day.
    </p>

    <p className="text-secondary">
      <strong>Capyngen: The Future of Travel and Getting Things Done</strong><br />
      Capyngen is fully embracing the future by using automation, drone delivery, blockchain transparency, and 
      smart contracts in its daily travel and logistics operations. These new ideas speed things up, save money, 
      and make the supply chain more reliable.
    </p>

    <a href="#contact" className="btn btn-outline-light mt-3">Let's Talk</a>
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

export default TravelLogistics;
