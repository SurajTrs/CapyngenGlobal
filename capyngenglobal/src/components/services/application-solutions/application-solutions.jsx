import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const IndustryAppsPage = () => {
  const solutions = [
    {
      title: "1. Food Delivery App",
      description:
        "With Capyngen's custom-built apps, you can start your own food delivery service. Track and manage orders, ensure secure payments, and connect restaurants and customers easily. Ideal for new ventures or growing restaurant chains in the competitive food market.",
      image: "https://img.icons8.com/clouds/500/delivery-scooter.png",
    },
    {
      title: "2. Logistics App",
      description:
        "Capyngen designs logistics apps that streamline delivery operations with real-time tracking, route optimization, fleet management, and dispatch coordination. Boost efficiency, cut costs, and empower both drivers and managers.",
      image: "https://img.icons8.com/clouds/500/road.png",
      reverse: true,
    },
    {
      title: "3. Cab Booking App",
      description:
        "Capyngen's cab booking solutions help you build Uber-like platforms with real-time ride tracking, driver/rider panels, GPS, and scalable architecture. Great for startups and cab operators expanding into digital markets.",
      image: "https://img.icons8.com/clouds/500/taxi.png",
    },
    {
      title: "4. Pickup & Delivery App",
      description:
        "We build pickup & delivery solutions that offer real-time tracking, secure payment systems, smart scheduling, and easy order management. Perfect for courier services and product delivery businesses on mobile and web.",
      image: "https://img.icons8.com/clouds/500/delivery.png",
      reverse: true,
    },
    {
      title: "5. Grocery Delivery App",
      description:
        "Create feature-rich grocery delivery apps with real-time inventory syncing, safe payment gateways, and delivery management. Offer smooth shopping experiences while scaling your grocery store digitally.",
      image: "https://img.icons8.com/clouds/500/grocery-store.png",
    },
    {
      title: "6. Pharmacy App",
      description:
        "Capyngen develops user-friendly pharmacy apps with prescription uploads, medicine search, secure delivery, and order tracking. Simplify medical purchases for users and streamline operations for pharmacies.",
      image: "https://img.icons8.com/clouds/500/pill.png",
      reverse: true,
    },
    {
      title: "7. Education App",
      description:
        "We craft engaging education platforms with live classes, video lectures, quizzes, and progress tracking. Empower students, teachers, and schools to teach and learn smarter—across mobile and web.",
      image: "https://img.icons8.com/clouds/500/study.png",
    },
  ];

  return (
    <div className="text-light min-vh-100 p-5" style={{ background: "#191919" }}>
      <div className="text-center mb-5 mt-4">
        <h1 className="fw-bold">
          Capyngen’s <span className="text-primary">Industry App Solutions</span>
        </h1>
        <p className="lead text-secondary mx-auto" style={{ maxWidth: "700px" }}>
          We build feature-rich, scalable, and user-centric mobile & web apps tailored for key industries.
        </p>
      </div>

      <div className="container">
        {solutions.map((service, index) => (
          <div
            key={index}
            className={`row bg-secondary bg-opacity-10 rounded-3 p-4 mb-5 align-items-center ${service.reverse ? "flex-md-row-reverse" : ""}`}
            style={{
              maxWidth: "1406px",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.1)",
              margin: "0 auto",
            }}
          >
            <div className="col-md-6 d-flex flex-column justify-content-center h-100">
              <div>
                <h4 className="fw-bold">{service.title}</h4>
                <p className="mb-0">{service.description}</p>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center h-100">
              <img
                src={service.image}
                alt={service.title}
                className="img-fluid rounded"
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryAppsPage;
