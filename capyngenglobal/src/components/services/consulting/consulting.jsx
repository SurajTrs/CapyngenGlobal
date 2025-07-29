import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ITConsultation = () => {
  return (
    <div className="text-light min-vh-100 py-5" style={{ background: "#191919" }}>
      <div className="text-center mb-5">
        <h1 className="fw-bold">IT Consultation</h1>
        <p className="text-primary">Get Expert Help with Your Digital Strategy</p>
        <p className="mx-auto" style={{ maxWidth: "800px" }}>
          Do you not know where to start or how to grow? Capyngen’s knowledgeable IT consultants will work with your team to plan, carry out, and oversee your digital transformation. Our consulting services help you understand and feel confident about upgrading old systems, looking into AI, or improving your security.
        </p>
      </div>

      {/* First Card */}
      <div className="container mb-4">
        <div className="card bg-dark text-light rounded-4 p-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1549921296-3a6b9b48f3c7"
                className="img-fluid rounded"
                alt="Consulting"
              />
            </div>
            <div className="col-md-6">
              <h4 className="fw-bold">Areas of Consulting:</h4>
              <ul>
                <li>Roadmaps for Digital Transformation</li>
                <li>Planning and Auditing IT Infrastructure</li>
                <li>Plan for Software Development</li>
                <li>Advice on Cybersecurity and Compliance</li>
                <li>Planning for Cloud Adoption and Migration</li>
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
              <h4 className="fw-bold">Why choose Capyngen for IT consulting?</h4>
              <ul>
                <li>Years of combined experience in the field</li>
                <li>Personalised tech suggestions</li>
                <li>Putting business first and technology second</li>
                <li>Support for end-to-end execution</li>
              </ul>
            </div>
            <div className="col-md-6 order-md-2 order-1">
              <img
                src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9"
                className="img-fluid rounded"
                alt="IT Mobile"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5 fst-italic">
        <p>
          You can be sure about making your IT roadmap. Capyngen is there to help you every step of the way.
        </p>
      </div>
    </div>
  );
};

export default ITConsultation;
