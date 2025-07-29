import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const cybersecurity = () => {
  return (
    <div className="text-light min-vh-100 py-5" style={{ background: "#191919" }}>
      <div className="text-center mb-5">
        <h1 className="fw-bold">Services for Cybersecurity</h1>
        <p className="text-primary"> Protect your business from cyber threats
        </p>
        <p className="mx-auto" style={{ maxWidth: "800px" }}>
          As cyber threats grow, it's important to keep your digital ecosystem safe.
          <br/> Capyngen offers a full range of cybersecurity services that help businesses find weaknesses, protect themselves from attacks, and follow industry standards.
        </p>
      </div>

      {/* Card 1 - What We Do */}
      <div className="container mb-4">
        <div className="card bg-dark text-light rounded-4 p-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src=""
                className="img-fluid rounded"
                alt="Network Planning"
              />
            </div>
            <div className="col-md-6">
              <h4 className="fw-bold">What we offer in terms of cybersecurity:</h4>
              <ul>
                <li>Vulnerability Assessment and Penetration Testing (VAPT)</li>
                <li>Protecting networks and stopping intrusions</li>
                <li>Protection from ransomware and endpoint security</li>
                <li>Cloud Security and Data Encryption</li>
                <li>Compliance with cybersecurity standards (ISO, GDPR, HIPAA)</li>
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
              <h4 className="fw-bold">Why should you choose Capyngen for cybersecurity?</h4>
              <ul>
                <li>Monitoring and threat detection that is proactive</li>
                <li>Professional incident response and risk management</li>
                <li>Security frameworks that are made to order</li>
                <li>Can be used by businesses of any size or type</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Final Message */}
      <div className="text-center mt-5 fst-italic">
        <p>
Use Capyngen to protect your business from cyber threats,
<br/> because it's better to stop them before they happen.        </p>
      </div>
    </div>
  );
};

export default cybersecurity;
