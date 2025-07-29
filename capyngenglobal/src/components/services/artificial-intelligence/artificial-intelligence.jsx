import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ArtificialIntelligence = () => {
  return (
    <div id="network-solutions" className="text-light min-vh-100 py-5" style={{ background: "#191919" }}>
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Technology that is smart and plans ahead</h1>
        <p className="text-primary">AI and Machine Learning</p>
        <p className="mx-auto" style={{ maxWidth: "800px" }}>
          Artificial intelligence is not the future; it is the present. At Capyngen, we help companies use AI to automate tasks, cut costs,
          and make experiences more personal.
          <br />
          Our AI systems can be used in finance, healthcare, retail, or logistics, and they will grow with your business.
        </p>
      </div>

      {/* Card 1 - What We Do */}
      <div className="container mb-4">
        <div className="card bg-dark text-light rounded-4 shadow border border-secondary p-3 p-md-4">
          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1581090700227-1c8c4467a3ee"
                className="img-fluid rounded"
                style={{ objectFit: "cover", maxHeight: "300px", width: "100%" }}
                alt="Network Planning"
              />
            </div>
            <div className="col-md-6">
              <h4 className="fw-bold mb-3">We offer AI services like:</h4>
              <ul className="ps-3">
                <li> Machine learning models for making smart decisions</li>
                <li> Natural Language Processing (NLP) for chatbots and automation</li>
                <li> Computer vision for finding objects, recognising faces, and surveillance</li>
                <li> Monitoring and improving network performance</li>
                <li> Predictive analytics to forecast behaviours and trends</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 - Main Benefits */}
      <div className="container mb-4">
        <div className="card bg-dark text-light rounded-4 shadow border border-secondary p-3 p-md-4">
          <div className="row align-items-center g-4">
            <div className="col-md-6 order-md-2 order-1">
              <img
                src="https://images.unsplash.com/photo-1555949963-aa79dcee9816"
                className="img-fluid rounded"
                style={{ objectFit: "cover", maxHeight: "300px", width: "100%" }}
                alt="Network Benefits"
              />
            </div>
            <div className="col-md-6 order-md-1 order-2">
              <h4 className="fw-bold mb-3">What Capyngen's AI Services can do for you:</h4>
              <ul className="ps-3">
                <li> Make interactions more personal and boost customer engagement</li>
                <li> Save time and money by automating repetitive tasks</li>
                <li> Gain real-time insights to support smarter decisions</li>
                <li> Use scalable AI architecture to accelerate digital transformation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Final Message */}
      <div className="text-center mt-5 p-3 bg-secondary bg-opacity-10 rounded">
        <p className="fst-italic mb-0">
          Don't work harder; work smarter.
          <br />
          With <strong>Capyngen</strong>, you can embrace AI and redefine how your business runs.
        </p>
      </div>
    </div>
  );
};

export default ArtificialIntelligence;