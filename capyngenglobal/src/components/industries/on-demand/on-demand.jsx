import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style.css';

const OnDemand = () => {
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
        <h1 className="display-4 fw-bold">On-Demand Services</h1>
        <p className="lead">Delivering convenience and instant access, right when you need it.</p>
        <button className="btn btn-primary mt-3">Let's Talk →</button>
      </div>

      {/* Intro Paragraph */}
      <div className="container py-4">
        <p className="text-center text-secondary">
          The on-demand economy has revolutionized how consumers access services, from ride-sharing to food delivery and home maintenance. Success in this fast-paced sector hinges on seamless user experiences, efficient logistics, and robust technology platforms. We build comprehensive IT solutions that power on-demand businesses, enabling them to connect users with service providers instantly and reliably.
        </p>
      </div>

      {/* What Our On-Demand Solutions Offer */}
      <div className="container py-5">
        <h2 className="fw-bold text-center text-primary mb-4">What Our On-Demand Solutions Offer</h2>

        {/* Service 1 - User-Facing Mobile Apps */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-start">
            <h5 className="fw-bold">User-Facing Mobile Apps</h5>
            <p className="text-secondary">Intuitive and feature-rich mobile applications for iOS and Android, allowing users to effortlessly browse, book, track, and pay for services. Features include real-time tracking, in-app chat, and secure payment integrations.</p>
          </div>
          <div className="col-md-6">
            <img src="/images/on-demand-user-app.jpg" alt="User-Facing Mobile Apps" className="img-fluid rounded shadow" />
          </div>
        </div>

        {/* Service 2 - Service Provider / Driver Apps */}
        <div className="row align-items-center flex-md-row-reverse mb-5">
          <div className="col-md-6 text-start">
            <h5 className="fw-bold">Service Provider / Driver Apps</h5>
            <p className="text-secondary">Dedicated applications for service providers and drivers, featuring real-time request notifications, optimized routing, earnings tracking, and communication tools to ensure efficient service delivery.</p>
          </div>
          <div className="col-md-6">
            <img src="/images/on-demand-provider-app.jpg" alt="Service Provider Apps" className="img-fluid rounded shadow" />
          </div>
        </div>

        {/* Service 3 - Admin Panels and Dashboards */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-start">
            <h5 className="fw-bold">Admin Panels and Dashboards</h5>
            <p className="text-secondary">Robust web-based admin panels for managing users, service providers, bookings, payments, and analytics. Gain comprehensive insights into operations, monitor performance, and make data-driven decisions.</p>
          </div>
          <div className="col-md-6">
            <img src="/images/on-demand-admin.jpg" alt="Admin Panels" className="img-fluid rounded shadow" />
          </div>
        </div>

        {/* Service 4 - Real-Time Tracking and Geolocation */}
        <div className="row align-items-center flex-md-row-reverse mb-5">
          <div className="col-md-6 text-start">
            <h5 className="fw-bold">Real-Time Tracking and Geolocation</h5>
            <p className="text-secondary">Integrate advanced geolocation services for accurate real-time tracking of service providers, estimated times of arrival, and optimized routing, enhancing transparency and customer satisfaction.</p>
          </div>
          <div className="col-md-6">
            <img src="/images/on-demand-tracking.jpg" alt="Real-Time Tracking" className="img-fluid rounded shadow" />
          </div>
        </div>

        {/* Service 5 - Secure Payment Gateway Integration */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-start">
            <h5 className="fw-bold">Secure Payment Gateway Integration</h5>
            <p className="text-secondary">Seamless and secure integration with multiple payment gateways, supporting various payment methods, wallets, and split payments. Ensure smooth and trustworthy transactions for all parties.</p>
          </div>
          <div className="col-md-6">
            <img src="/images/on-demand-payments.jpg" alt="Payment Gateway Integration" className="img-fluid rounded shadow" />
          </div>
        </div>

      </div>

      {/* Why Choose Our On-Demand Solutions */}
      <div className="container my-5">
        <div className="row rounded p-4 align-items-center" style={{ backgroundColor: '#111111ff' }}>
          <div className="col-md-6 text-white">
            <h4>Why Choose Our On-Demand Solutions</h4>
            <ul>
              <li className="mb-3"> <strong>Scalable Architecture:</strong> Solutions designed to handle high user volumes and rapid growth without compromising performance.</li>
              <li className="mb-3"> <strong>User-Centric Design:</strong> Intuitive and engaging interfaces for both users and service providers, ensuring a smooth experience.</li>
              <li className="mb-3"> <strong>Robust Security:</strong> Prioritize data privacy and secure transactions with advanced encryption and compliance protocols.</li>
              <li className="mb-3"> <strong>Customization and Integration:</strong> Tailored solutions that can integrate with existing systems and unique business requirements.</li>
              <li className="mb-3"> <strong>Ongoing Support:</strong> Comprehensive post-launch support, maintenance, and updates to ensure continuous operation and improvement.</li>
            </ul>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1596522300062-8e10d0d829e0" // Placeholder for why choose us
              className="img-fluid rounded shadow"
              alt="Why Choose Us"
            />
          </div>
        </div>
      </div>

      {/* Final Text */}
      <div className="text-center py-4" style={{ color: '#91c4ffe9' }}>
        <p>Turn your on-demand vision into a reality with powerful, reliable, and user-friendly IT solutions.</p>
      </div>
    </div>
  );
};

export default OnDemand;