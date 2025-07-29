import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NetworkSolutions = () => {
  return (
    <div className="text-light min-vh-100 py-5" style={{ background: "#191919" }}>
      <div className="text-center mb-5">
        <h1 className="fw-bold">Solutions for Networks</h1>
        <p className="text-primary">Stay in Touch. Keep Being Efficient.</p>
        <p className="mx-auto" style={{ maxWidth: "800px" }}>
          Your business network is what keeps you going. Capyngen designs, builds, and runs high-performance network infrastructures that make sure everything is connected, runs quickly, and is very safe.
          We provide customised network solutions for businesses, offices, data centres, and remote teams.
        </p>
      </div>

      {/* Card 1 - What We Do */}
      <div className="container mb-4">
        <div className="card bg-dark text-light rounded-4 p-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1581090700227-1c8c4467a3ee"
                className="img-fluid rounded"
                alt="Network Planning"
              />
            </div>
            <div className="col-md-6">
              <h4 className="fw-bold">What We Do:</h4>
              <ul>
                <li>Planning and deploying a LAN or WAN</li>
                <li>Wireless solutions and VPN integration</li>
                <li>Firewall and threat management</li>
                <li>Monitoring the performance of the network</li>
                <li>Solutions for connecting to the cloud</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 - Main Benefits */}
      <div className="container mb-4">
        <div className="card bg-dark text-light rounded-4 p-4">
          <div className="row align-items-center">
            <div className="col-md-6 order-md-2 order-1">
              <img
                src="https://images.unsplash.com/photo-1555949963-aa79dcee9816"
                className="img-fluid rounded"
                alt="Network Benefits"
              />
            </div>
            <div className="col-md-6 order-md-1 order-2">
              <h4 className="fw-bold">Main Benefits:</h4>
              <ul>
                <li>24/7 uptime and very little lag</li>
                <li>Secure access and mobility from afar</li>
                <li>Designed to be scalable and ensure business continuity</li>
                <li>Full support for cloud and IoT environments</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Final Message */}
      <div className="text-center mt-5 fst-italic">
        <p>
          Capyngen builds networks that don't just connect devices; they also connect chances.
        </p>
      </div>
    </div>
  );
};

export default NetworkSolutions;
