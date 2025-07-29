import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const DataAnalyticsPage = () => {
  return (
    <div className="text-light min-vh-100 py-5" style={{ background: "#191919" }}>
      <div className="text-center mb-5">
        <h1 className="fw-bold">Business Intelligence and Data Analytics</h1>
        <p className="text-primary">Get Expert Help with Your Digital Strategy</p>
        <p className="mx-auto" style={{ maxWidth: "800px" }}>
Make your data work for you strategically        </p>
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
              <h4 className="fw-bold">What we do with data:</h4>
              <ul>
                 <li>Creating BI Dashboards (Tableau, Power BI)</li>
            <li>Managing and building big data</li>
            <li>Mining and showing data</li>
            <li>Predictive and Prescriptive Analytics</li>
            <li>Cloud-based Data Warehousing</li>
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
              <h4 className="fw-bold">Main Benefits:</h4>
              <ul>
                <li>Find chances for growth and risks that aren't obvious</li>
            <li>Make reporting automatic and make predictions better</li>
            <li>See KPIs across all departments</li>
            <li>Use real-time insights to get an edge over your competitors</li>
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
          Your data talks louder, clearer, and smarter with <strong>Capyngen</strong>.
        </p>
      </div>
    </div>
  );
};

export default DataAnalyticsPage;
