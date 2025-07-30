import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style.css';
import { BsCheckCircle, BsGem, BsBarChartLine, BsLightning } from 'react-icons/bs';
import { FaStore, FaChartBar, FaShoppingBag } from 'react-icons/fa';

const Retail = () => {
  return (
    <>
    <div className="bg-black">

      {/* Hero Section */}
      <div
        className="text-white d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(11, 42, 76, 0.9)), url("/background.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '60vh',
          flexDirection: 'column',
          textAlign: 'center'
        }}
      >
        <h1 className="display-4 fw-bold">Retail & E-Commerce</h1>
        <p className="lead">
          Personal, Smart, and All-in-One: Our IT Solutions for Modern Retail
        </p>
        <button className="btn btn-primary mt-3">Let's Talk →</button>
      </div>

      {/* Intro Paragraph */}
      <div className="container py-4">
        <p className="text-center text-secondary">
          Today, retail is quick, broken up, and very competitive. People want to have the same good experience when they shop online, on their phones, or in person. That's why our Retail IT Solutions focus on things like unified commerce, real-time inventory control, analytics, and making loyalty programs more personal.
        </p>
      </div>

      <h1 className="text-primary text-center">What Our Retail Platforms Can Do for You</h1>

      <div className="container py-5">

        {/* 1. Omnichannel Commerce */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img src="/images/retail-pos.jpg" alt="Omnichannel Commerce" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6 text-start text-white">
            <h3 className="fw-bold">Omnichannel Commerce (Web, Mobile, and In-Store POS)</h3>
            <ul className="text-secondary">
              <li>A single codebase or central backend runs web stores, mobile apps, and point-of-sale (POS) hardware.</li>
              <li>"Buy online, pick up in store" and syncing stock levels in real time make things easier.</li>
            </ul>
          </div>
        </div>

        {/* 2. Order & Inventory Management */}
        <div className="row align-items-center flex-md-row-reverse mb-5">
          <div className="col-md-6">
            <img src="/images/inventory.jpg" alt="Inventory Management" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6 text-start text-white">
            <h3 className="fw-bold">Managing Orders and Inventory</h3>
            <ul className="text-secondary">
              <li>Our tools keep track of inventory in warehouses, stores, and with third-party logistics (3PL) partners.</li>
              <li>Smart allocation makes sure that the right item fills the right channel order.</li>
            </ul>
          </div>
        </div>

        {/* 3. CRM & Loyalty */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img src="/images/loyalty.jpg" alt="CRM & Loyalty" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6 text-start text-white">
            <h3 className="fw-bold">Combining CRM and Loyalty</h3>
            <ul className="text-secondary">
              <li>Get information about purchases, preferences, and customer journeys to improve targeted marketing.</li>
              <li>Loyalty engines give points, deals, or exclusive content to people who buy from them again.</li>
            </ul>
          </div>
        </div>

        {/* 4. Personalization */}
        <div className="row align-items-center flex-md-row-reverse mb-5">
          <div className="col-md-6">
            <img src="/images/personalization.jpg" alt="Personalization" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6 text-start text-white">
            <h3 className="fw-bold">Suggestions for Products and Personalization</h3>
            <ul className="text-secondary">
              <li>AI-based engines use past behavior to suggest products or promotions.</li>
            </ul>
          </div>
        </div>

      </div>

      {/* Emphasis Line */}
      <div className="container py-3">
        <p className="text-center" style={{ color: '#91c4ffe9' }}>
          Our commitment to innovation drives everything we do.
        </p>
      </div>

      {/* Why Choose Capyngen */}
      <div className="container my-5">
        <div className="row rounded p-4 align-items-center" style={{ backgroundColor: '#111111ff' }}>
          <div className="col-md-6 text-white">
            <h4>Why Retailers Love What We Do</h4>
            <ul>
               <li>Integrations: Easily connect your ERP, accounting, Shopify, Magento, and WooCommerce systems.</li>
              <li>Cloud-native architecture can handle spikes in traffic, and PCI-validated payments keep your data safe.</li>
              <li>Design that focuses on the customer: Checkout, search, and navigation are all easy and fun to use.</li>
            </ul>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
              className="img-fluid rounded shadow"
              alt="Retail Technology"
            />
          </div>
        </div>
      </div>

      {/* Final Note */}
      <div className="text-center py-4" style={{ color: '#91c4ffe9' }}>
        <p>
          Retail is changing fast — and Capyngen helps you stay ahead.
        </p>
      </div>

    </div>
 
<section className="bg-black text-white py-5">
  <h2 className="text-center mb-5 fw-bold">Retail Use Case Snapshots</h2>
  <div className="container">
    <div className="row text-center g-4">

      {/* Grocery Store */}
      <div className="col-md-4">
        <div className="mb-3 d-flex justify-content-center">
          <div className="d-flex align-items-center justify-content-center border border-primary rounded-circle"
style={{ width: '50px', height: '50px' }}>            <FaStore color="#0d6efd" size="28" />
          </div>
        </div>
        <p className="text-light fs-6">
          Grocery Store: Real-time stock alerts and curbside orders cut lost sales by <strong>18%</strong>.
        </p>
      </div>

      {/* Apparel Brand */}
      <div className="col-md-4">
        <div className="mb-3 d-flex justify-content-center">
          <div className="d-flex align-items-center justify-content-center border border-primary rounded-circle"
               style={{ width: '50px', height: '50px' }}>
            <FaChartBar color="#0d6efd" size="28" />
          </div>
        </div>
        <p className="text-light fs-6">
          By combining its webshop, point of sale, and loyalty club into one system, an apparel brand saw a <strong>25% increase</strong> in returning customers.
        </p>
      </div>

      {/* Electronics Outlet */}
      <div className="col-md-4">
        <div className="mb-3 d-flex justify-content-center">
          <div className="d-flex align-items-center justify-content-center border border-primary rounded-circle"
style={{ width: '50px', height: '50px' }}>            <FaShoppingBag color="#0d6efd" size="28" />
          </div>
        </div>
        <p className="text-light fs-6">
          Electronics Outlet: Customer feedback led to personalized upsells on accessories and warranty plans.
        </p>
      </div>

    </div>
  </div>
</section>
<section className="why-section-back bg-black">
  <div className="why-section-card">
    <div className="container">
      <h2 className="why-title">Why Choose Capyngen?</h2>
      <p className="why-subtitle">
        We are committed to delivering excellence, innovation, and measurable results.
        Our approach is designed to propel your business forward in the digital landscape.
      </p>
      <div className="row why-row">
        <div className="col-md-6">
          <ul className="why-list">
            <li className="why-list-item">
              <BsCheckCircle className="reason-icon" />
              <span className="reason-text">End-to-end digital transformation support tailored to your unique business needs.</span>
            </li>
            <li className="why-list-item">
              <BsGem className="reason-icon" />
              <span className="reason-text">Unparalleled expertise in full-stack IT solutions and cutting-edge digital marketing.</span>
            </li>
            <li className="why-list-item">
              <BsBarChartLine className="reason-icon" />
              <span className="reason-text">Data-driven strategies that ensure measurable growth and strong ROI.</span>
            </li>
            <li className="why-list-item">
              <BsLightning className="reason-icon" />
              <span className="reason-text">Agile methodologies and rapid deployment for quick, impactful results.</span>
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <div className="why-image-wrapper">
            <img src="/analytics-team.jpg" alt="Analytics Team" className="why-image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<h1 className="text-primary text-center">
    Our Promise to Help You Grow
</h1>

<div className="container py-4">
        <p className="text-center text-secondary">
We don't sell technology that works for everyone. We work with you to make your vision a reality, make sure our solutions fit with your values, and make sure they can grow with your goals.        </p>
      </div>

<section className="bg-black text-white py-5">
  <div className="container text-center">
    <h3 className="mb-5">This is How It Works</h3>

    {/* Top Row - 3 Cards */}
    <div className="row gy-4 mb-4">
      {[
        {
          title: "Workshops for Discovery",
          text: "We start with guided workshops to map out workflows, stakeholders, technology, and problems. This co-creation plants the seeds for strategy and vision.",
        },
        {
          title: "Making Prototypes and Testing",
          text: "We build the right product early by using early mockups and pilot apps to help shape servers, edge devices, and UI screens.",
        },
        {
          title: "Development in Stages",
          text: "Features are made, tested, and improved in two- or four-week sprints, with feedback loops that never end.",
        },
      ].map((item, i) => (
        <div className="col-md-4" key={i}>
          <div
            className="rounded-4 h-100"
            style={{
              padding: '2px',
              borderRadius: '1.25rem',
              background: 'linear-gradient(90deg, #0085FF, #91C4FFCC)',
            }}
          >
            <div
              className="p-4 h-100"
              style={{
                backgroundColor: '#000',
                borderRadius: '1.15rem',
                boxShadow: '0 0 12px #0d6efd33',
              }}
            >
              <h5 className="fw-semibold mb-2">{item.title}</h5>
              <p className="mb-0 text-light">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Bottom Row - 3 Cards */}
    <div className="row gy-4">
      {[
        {
          title: "Deployment and Managing Change",
          text: "We run pilots, hold onboarding sessions, and help teams and locations get ready.",
        },
        {
          title: "Measuring and Improving",
          text: "Operational dashboards keep track of KPIs like uptime, order times, ticket closures, and conversions, and we give you detailed information about your return on investment (ROI).",
        },
        {
          title: "Support That Keeps Going",
          text: "Proactive support contracts give you security patches, performance improvements, and feature updates.",
        },
      ].map((item, i) => (
        <div className="col-md-4" key={i}>
          <div
            className="rounded-4 h-100"
            style={{
              padding: '2px',
              borderRadius: '1.25rem',
              background: 'linear-gradient(90deg, #0085FF, #91C4FFCC)',
            }}
          >
            <div
              className="p-4 h-100"
              style={{
                backgroundColor: '#000',
                borderRadius: '1.15rem',
                boxShadow: '0 0 12px #0d6efd33',
              }}
            >
              <h5 className="fw-semibold mb-2">{item.title}</h5>
              <p className="mb-0 text-light">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



    </>
  );
};

export default Retail;
