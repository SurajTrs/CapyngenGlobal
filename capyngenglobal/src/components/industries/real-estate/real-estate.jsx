import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style.css';

const RealState = () => {
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
        <h1 className="display-4 fw-bold">Real Estate</h1>
        <p className="lead">Real estate and new ideas are combined.</p>
        <button className="btn btn-primary mt-3">Let's Talk →</button>
      </div>

      {/* Intro Paragraph */}
      <div className="container py-4">
        <p className="text-center text-secondary">
          The real estate market is changing quickly because of the digital world we live in. Just like buyers want information right away, developers want smart answers, and investors need data they can trust. Capyngen brings all of these things together by using technology-driven platforms that make it easier to market, manage, and make decisions about real estate.
        </p>
      </div>

      {/* Main Section */}
      <div className="container py-5">

        {/* Section 1 */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img src="/images/oil-gas.jpg" alt="Real Estate Tools" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6 text-start">
            <h3 className="fw-bold">New Tools for Investing in Real Estate</h3>
            <p className="text-secondary">
              Capyngen helps real estate companies with the most up-to-date digital tools. Our technology makes it easier and faster to list properties, manage tenants, and keep track of how well they are doing. We help you grow your business by giving you tools like artificial intelligence, cloud systems, and 3D tours that make it easier for you to do so.
            </p>
          </div>
        </div>

        {/* Section 2 */}
       {/* Section 2 */}
<h2 className="fw-bold text-center text-primaru mb-4">The Main Services We Offer</h2>

{/* Service 1 - Left Image, Right Text */}
<div className="row align-items-center mb-5">
  <div className="col-md-6">
    <img src="/images/property-listing.jpg" alt="Property Listing" className="img-fluid rounded shadow" />
  </div>
  <div className="col-md-6">
    <h5 className="fw-bold">Websites that let you list properties</h5>
    <p className="text-secondary">You can use smart search filters, maps that show where your properties are, 3D views, and contact forms to show off your properties. It works with CRM, which makes it easy to keep track of leads.</p>
  </div>
</div>

{/* Service 2 - Right Image, Left Text */}
<div className="row align-items-center flex-md-row-reverse mb-5">
  <div className="col-md-6">
    <img src="/images/crm-tools.jpg" alt="CRM Tools" className="img-fluid rounded shadow" />
  </div>
  <div className="col-md-6">
    <h5 className="fw-bold">Tools for managing customer relationships in real estate</h5>
    <p className="text-secondary">You can not only keep track of leads, but you can also automate follow-ups and run sales with the help of simple dashboards and reminders.</p>
  </div>
</div>

{/* Service 3 - Left Image, Right Text */}
<div className="row align-items-center mb-5">
  <div className="col-md-6">
    <img src="/images/virtual-tour.jpg" alt="Virtual Tours" className="img-fluid rounded shadow" />
  </div>
  <div className="col-md-6">
    <h5 className="fw-bold">Virtual tours in three dimensions</h5>
    <p className="text-secondary">Virtual walkthroughs let buyers see homes from anywhere and get more involved in the process.</p>
  </div>
</div>

{/* Service 4 - Right Image, Left Text */}
<div className="row align-items-center flex-md-row-reverse mb-5">
  <div className="col-md-6">
    <img src="/images/mobile-app.jpg" alt="Mobile App" className="img-fluid rounded shadow" />
  </div>
  <div className="col-md-6">
    <h5 className="fw-bold">Mobile real estate properties</h5>
    <p className="text-secondary">Apps that let buyers, renters, and real estate agents search for, view, and manage properties while they are on the go.</p>
  </div>
</div>

{/* Service 5 - Left Image, Right Text */}
<div className="row align-items-center mb-5">
  <div className="col-md-6">
    <img src="/images/property-management.jpg" alt="Property Management" className="img-fluid rounded shadow" />
  </div>
  <div className="col-md-6">
    <h5 className="fw-bold">Ways to manage property</h5>
    <p className="text-secondary">You can handle all tenant communication from one place, including rent, repairs, and leases.</p>
  </div>
</div>


      </div>

<h1 className='text-primary text-center'>
    The People We Help
</h1>
<section className="bg-black text-white py-5">
      <div className="container">
        <h2 className="mb-5">The People We Help</h2>
        <div className="row align-items-center">
          {/* Left Column - Text */}
          <div className="col-md-6">
            <ul className="list-unstyled">
              <li className="mb-3">
                 Use digital tools to sell more quickly, assemblers and developers.
              </li>
              <li className="mb-3">
                Agencies can easily keep track of and manage property listings.
              </li>
              <li className="mb-3">
                 Investors and managers can use smart dashboards to keep an eye on their assets.
              </li>
              <li className="mb-3">
                 You can get accurate information about a property at any time, whether you want to buy it or rent it.
              </li>
            </ul>
          </div>

          {/* Right Column - Image */}
          <div className="col-md-6 text-center">
            <img
              src=""
              alt="People We Help"
              className="img-fluid rounded shadow"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
     <div className="container my-5">
        <div className="row rounded p-4 align-items-center" style={{backgroundColor:'#111111ff'}}>
          <div className="col-md-6 text-white">
            <h4>Why Capyngen??</h4>
            <ul>
        <li className="mb-3"> Artificial intelligence, augmented reality, virtual reality, and cloud-based solutions are all examples of technology that is ready for the future.</li>
      <li className="mb-3"> "User-centred" means that the platform is easy for everyone to use.</li>
      <li className="mb-3"> Help with everything, from planning to after the launch.</li>
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
      {/* Final Text */}
      <div className="text-center py-4" style={{ color: '#91c4ffe9' }}>
        <p>Our commitment to excellence drives every aspect of our business.</p>
      </div>
    </div>
  );
};

export default RealState;
