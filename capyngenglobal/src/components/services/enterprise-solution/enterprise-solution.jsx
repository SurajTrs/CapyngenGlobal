import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const EnterpriseITSolutions = () => {
  return (
    <div className="text-light min-vh-100 py-5" style={{ background: "#191919" }}>
      <div className="text-center mb-5">
        <h1 className="fw-bold">Enterprise IT Solutions</h1>
        <p className="text-primary">Change the Way You Do Business</p>
        <p className="mx-auto" style={{ maxWidth: "800px" }}>
          In a world where businesses compete with each other, they need IT systems that are smart, flexible, and able to grow.
          Capyngen offers business-level solutions that make your operations run more smoothly, increase productivity, and speed up digital transformation.
          We look at everything from all angles and combine cloud, software, and infrastructure to meet the needs of your business.
        </p>
      </div>

      {/* First Card */}
      <div className="container mb-4">
        <div className="card bg-dark text-light rounded-4 p-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                className="img-fluid rounded"
                alt="Enterprise Solutions"
              />
            </div>
            <div className="col-md-6">
              <h4 className="fw-bold">Enterprise Solutions - What We Offer:</h4>
              <ul>
                <li>Setting up Enterprise Resource Planning (ERP)</li>
                <li>Integration of Customer Relationship Management (CRM)</li>
                <li>Moving to the Cloud and Setting up a Hybrid Cloud</li>
                <li>Building Custom Apps for Businesses</li>
                <li>Managing IT Infrastructure and Virtualisation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className="container mb-4">
        <div className="card bg-dark text-light rounded-4 p-4">
          <div className="row align-items-center">
            <div className="col-md-6 order-md-1 order-2">
              <h4 className="fw-bold">Why Businesses Trust Capyngen:</h4>
              <ul>
                <li>Solutions made just for your size and industry</li>
                <li>Seamless integration of systems between departments</li>
                <li>Help from experts and delivery of projects</li>
                <li>Architectures that will last</li>
              </ul>
            </div>
            <div className="col-md-6 order-md-2 order-1">
              <img
                src="https://images.unsplash.com/photo-1603354350317-6d4be0374f12"
                className="img-fluid rounded"
                alt="Why Trust Capyngen"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Final Message */}
      <div className="text-center mt-5 fst-italic">
        <p>
          With Capyngen's smart IT solutions, you can rethink how your business works.
        </p>
      </div>
    </div>
  );
};

export default EnterpriseITSolutions;
