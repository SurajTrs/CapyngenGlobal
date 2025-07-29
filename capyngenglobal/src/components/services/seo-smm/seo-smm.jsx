import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ImpactPage = () => {
  return (
    <div className="bg-black text-white py-5 px-3">
      <div className="container text-center">
        <h1 className="fw-bold mb-3">
          How SEO & SMM <span className="text-primary">Drive Growth</span> with Capyngen
        </h1>
        <p className="text-secondary mb-5">
          Our expert SEO strategies and impactful social media marketing campaigns are<br/>
          designed to elevate your brand and connect you with your audience.
        </p>

        {/* SEO Section */}
        <div className="row bg-dark rounded-4 p-4 mb-5 align-items-center">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1553729459-efe14ef6055d" // placeholder image
              alt="SEO"
              className="img-fluid rounded-3"
            />
          </div>
          <div className="col-md-6 text-start mt-4 mt-md-0">
            <h3 className="fw-bold text-start">Search Engine Optimization</h3>
            <p className="text-primary mb-1">Achieve Top Rankings & Organic Growth</p>
            <ul className="text-white">
              <li>Keyword Research & Competitive Analysis</li>
              <li>On-page Optimization: Meta Tags, Headers, Schema</li>
              <li>Technical Fixes: Speed, Mobile-Friendliness, Crawlability</li>
              <li>High-Quality Link Building</li>
              <li>Google Analytics & Ranking Reports</li>
            </ul>
            <button className="btn btn-primary">Explore SEO Services</button>
          </div>
        </div>

        {/* SMM Section */}
        <div className="row bg-dark rounded-4 p-4 mb-5 align-items-center">
          <div className="col-md-6 text-start">
            <h3 className="fw-bold text-start">Social Media Marketing</h3>
            <p className="text-primary mb-1">Engage Audiences & Build Brand Loyalty</p>
            <ul className="text-white">
              <li>Platform-Specific Content Strategy</li>
              <li>Ad Campaign Management (Facebook, Instagram, LinkedIn)</li>
              <li>Visual Creatives for Posts & Stories</li>
              <li>Hashtag Strategy and Influencer Outreach</li>
              <li>Social Listening & Real-Time Engagement</li>
            </ul>
            <button className="btn btn-primary">Discover SMM Solutions</button>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4" // placeholder image
              alt="SMM"
              className="img-fluid rounded-3"
            />
          </div>
        </div>

        {/* Impact Section */}
        <h3 className="mb-4">Our Impact: Driving Measurable Results</h3>
        <div className="row g-4 text-start">
          {[
            ["350%+", "Organic Traffic Growth", "Achieved for a B2B SaaS client in 6 months through comprehensive SEO."],
            ["2.5M+", "Social Media Reach", "Across integrated campaigns for a leading consumer brand."],
            ["15%+", "Conversion Rate Uplift", "From targeted SMM ad campaigns for e-commerce clients."],
            ["Top 3 Positions", "Keyword Rankings", "For competitive industry keywords within 9 months."],
            ["95%+", "Positive Sentiment", "Maintained across social media channels for our clients."],
            ["x2 ROI", "Paid Campaign Performance", "Consistently delivered for our clients' digital ad spend."]
          ].map(([stat, title, desc], i) => (
            <div className="col-md-4" key={i}>
              <div className="bg-dark rounded-4 p-4 h-100">
                <h5 className="text-white fw-bold">{stat}</h5>
                <h6 className="text-primary">{title}</h6>
                <p className="text-secondary small mb-0">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactPage;
