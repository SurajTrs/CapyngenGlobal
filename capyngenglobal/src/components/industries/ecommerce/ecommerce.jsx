import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style.css';

const Ecommerce = () => {
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
        <h1 className="display-4 fw-bold">eCommerce Industry</h1>
        <p className="lead">
          Capyngen enables scalable, intelligent, and customer-first digital commerce experiences.
        </p>
        <button className="btn btn-primary mt-3">Let's Talk →</button>
      </div>

      {/* Intro Paragraph */}
      <div className="container py-4">
        <p className="text-center text-secondary">
          eCommerce is transforming the way people shop. Capyngen helps businesses build fast, intelligent,
          and personalized commerce platforms that grow with their customers and deliver results.
        </p>
      </div>

      <div className="container py-5">
        {/* Section 1 */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img src="/images/ecommerce.jpg" alt="eCommerce" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6 text-start text-white">
            <h3 className="fw-bold">Omnichannel Commerce</h3>
            <p className="text-secondary">
              Seamless shopping experiences across mobile, desktop, and physical channels with integrated systems.
            </p>
            <ul className="text-secondary">
              <li>Unified POS and inventory</li>
              <li>Integrated customer support and chat</li>
              <li>Cross-channel loyalty and offers</li>
            </ul>
          </div>
        </div>

        {/* Section 2 */}
        <div className="row align-items-center flex-md-row-reverse mb-5">
          <div className="col-md-6">
            <img src="/images/personalization.jpg" alt="Personalization" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6 text-start text-white">
            <h3 className="fw-bold">AI-Powered Personalization</h3>
            <ul className="text-secondary">
              <li>Real-time product recommendations</li>
              <li>Personalized promotions and bundles</li>
              <li>Dynamic pricing engines</li>
              <li>Behavioral segmentation</li>
            </ul>
            <p className="text-secondary">
              Enhance customer retention and lifetime value with intelligent insights.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img src="/images/inventory.jpg" alt="Inventory" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6 text-start text-white">
            <h3 className="fw-bold">Smart Inventory & Fulfillment</h3>
            <ul className="text-secondary">
              <li>Predictive inventory planning</li>
              <li>Automated reordering workflows</li>
              <li>Real-time stock visibility</li>
              <li>Multi-location inventory sync</li>
            </ul>
          </div>
        </div>

        {/* Section 4 */}
        <div className="row align-items-center flex-md-row-reverse mb-5">
          <div className="col-md-6">
            <img src="/images/security.jpg" alt="Security" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6 text-start text-white">
            <h3 className="fw-bold">Secure & Scalable Platforms</h3>
            <ul className="text-secondary">
              <li>PCI-DSS compliant payment gateways</li>
              <li>End-to-end encryption and fraud detection</li>
              <li>Elastic cloud architecture</li>
              <li>High-performance CDN integration</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Emphasis Text */}
      <div className="container py-3">
        <p className="text-center" style={{ color: '#91c4ffe9' }}>
          Commerce is evolving. Capyngen makes sure you're ahead of the curve.
        </p>
      </div>

      {/* Why Capyngen */}
      <div className="container my-5">
        <div className="row rounded p-4 align-items-center" style={{ backgroundColor: '#111111ff' }}>
          <div className="col-md-6 text-white">
            <h4>Why Choose Capyngen for eCommerce?</h4>
            <ul>
              <li><strong>Fast Time to Market:</strong> Launch MVPs quickly with modular design.</li>
              <li><strong>Data-Driven Decisions:</strong> Leverage deep analytics for every interaction.</li>
              <li><strong>Customer Delight:</strong> Smooth UX across devices and platforms.</li>
              <li><strong>Reliable Scale:</strong> Grow with zero downtime and full observability.</li>
              <li><strong>Global Readiness:</strong> Multi-currency, language, and compliance built-in.</li>
            </ul>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4"
              className="img-fluid rounded shadow"
              alt="eCommerce tech"
            />
          </div>
        </div>
      </div>

      <div className="text-center py-4" style={{ color: '#91c4ffe9' }}>
        <p>Your digital storefront deserves innovation. Let’s make it happen.</p>
      </div>
    </div>
  );
};

export default Ecommerce;
