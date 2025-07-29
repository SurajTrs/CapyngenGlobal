import React from 'react';
import appImage from '../../assets/app-dev-image.png'; 
import '../../style.css';

const CoreServices = () => {
  return (
    <>
    <section className='pagemain'>
   <h1 className="core-title text-white  py-5 text-center mb-5 display-3 ">OUR CORE SERVICES</h1>

       <div className="core-services text-white py-2 d-flex justify-content-center">
         
        <div className="card square-card bg-dark text-light shadow">
          <div className="card-body h-100 d-flex flex-column">
            {/* Heading centered at top */}
            <div className="text-center mb-3">
              <h3 className="fw-bold mb-0">App Development</h3>
            </div>

            {/* Horizontal split: image left, content right */}
            <div className="d-flex flex-grow-1">
              {/* Left - Image */}
              <div className="w-50 d-flex align-items-center justify-content-center p-3">
                <img src={appImage} alt="App Dev" className="img-fluid max-img" />
              </div>

              {/* Right - Text */}
              <div className="w-50 d-flex flex-column justify-content-center p-3">
                <ul className="list-unstyled small mb-3">
                  <li>• Android, iOS & Hybrid App Development</li>
                  <li>• Custom Mobile Solutions</li>
                  <li>• SaaS and Cloud-Based Apps</li>
                  <li>• Food Delivery, Cab Booking, Logistics & Grocery Apps</li>
                  <li>• App Maintenance & Scaling</li>
                </ul>
               <a
  href="services/applications-development" 
  className="btn btn-outline-light btn-sm rounded-pill align-self-start"
>
  Read more &gt;&gt;
</a>

              </div>
            </div>
          </div>
        </div>
      </div>


       <div className="core-services text-white py-5 d-flex justify-content-center">
        <div className="card square-card bg-dark text-light shadow">
          <div className="card-body h-100 d-flex flex-column">
            {/* Heading centered at top */}
            <div className="text-center mb-3">
              <h3 className="fw-bold mb-0">Web Development</h3>
            </div>

            {/* Horizontal split: image left, content right */}
            <div className="d-flex flex-grow-1">
              {/* Left - Image */}
              <div className="w-50 d-flex align-items-center justify-content-center p-3">
                <img src={appImage} alt="App Dev" className="img-fluid max-img" />
              </div>

              {/* Right - Text */}
              <div className="w-50 d-flex flex-column justify-content-center p-3">
                <ul className="list-unstyled small mb-3">
                  <li>• Website & CMS Development (WordPress, Joomla, Drupal)</li>
                  <li>• Custom Platforms using PHP, Laravel, Angular, NodeJS & ReactJS</li>
                  <li>• API Development & Integration</li>
                  <li>• Webflow Development</li>
                  <li>• Outsourced Web Projects</li>
                </ul>
                <button className="btn btn-outline-light btn-sm rounded-pill align-self-start">
                  Read more &gt;&gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


       <div className="core-services text-white py-5 d-flex justify-content-center">
        <div className="card square-card bg-dark text-light shadow">
          <div className="card-body h-100 d-flex flex-column">
            {/* Heading centered at top */}
            <div className="text-center mb-3">
              <h3 className="fw-bold mb-0">E-Commerce Development</h3>
            </div>

            {/* Horizontal split: image left, content right */}
            <div className="d-flex flex-grow-1">
              {/* Left - Image */}
              <div className="w-50 d-flex align-items-center justify-content-center p-3">
                <img src={appImage} alt="App Dev" className="img-fluid max-img" />
              </div>

              {/* Right - Text */}
              <div className="w-50 d-flex flex-column justify-content-center p-3">
                <ul className="list-unstyled small mb-3">
                  <li>• Shopify, Magento, WooCommerce, VirtueMart Platforms</li>
                  <li>• Product Pages & Checkout Optimization</li>
                  <li>• Secure Payment Gateway Integration</li>
                  <li>• Multi-vendor Marketplace Solutions</li>
                  <li>• Headless Commerce Implementation</li>
                </ul>
                <button className="btn btn-outline-light btn-sm rounded-pill align-self-start">
                  Read more &gt;&gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


       <div className="core-services text-white py-5 d-flex justify-content-center">
        <div className="card square-card bg-dark text-light shadow">
          <div className="card-body h-100 d-flex flex-column">
            {/* Heading centered at top */}
            <div className="text-center mb-3">
              <h3 className="fw-bold mb-0">Custom AI & Chat GPT Solutions</h3>
            </div>

            {/* Horizontal split: image left, content right */}
            <div className="d-flex flex-grow-1">
              {/* Left - Image */}
              <div className="w-50 d-flex align-items-center justify-content-center p-3">
                <img src={appImage} alt="App Dev" className="img-fluid max-img" />
              </div>

              {/* Right - Text */}
              <div className="w-50 d-flex flex-column justify-content-center p-3">
                <ul className="list-unstyled small mb-3">
                  <li>• AI Chatbot Development</li>
                  <li>• Custom AI Model Design</li>
                  <li>• ChatGPT API Integration</li>
                  <li>• Predictive Analytics & Automation Tools</li>
                  <li>• AI for CRM, Sales, and Support</li>
                </ul>
                <button className="btn btn-outline-light btn-sm rounded-pill align-self-start">
                  Read more &gt;&gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

       <div className="core-services text-white py-5 d-flex justify-content-center">
        <div className="card square-card bg-dark text-light shadow">
          <div className="card-body h-100 d-flex flex-column">
            {/* Heading centered at top */}
            <div className="text-center mb-3">
              <h3 className="fw-bold mb-0">UI/UX Design</h3>
            </div>

            {/* Horizontal split: image left, content right */}
            <div className="d-flex flex-grow-1">
              {/* Left - Image */}
              <div className="w-50 d-flex align-items-center justify-content-center p-3">
                <img src={appImage} alt="App Dev" className="img-fluid max-img" />
              </div>

              {/* Right - Text */}
              <div className="w-50 d-flex flex-column justify-content-center p-3">
                <ul className="list-unstyled small mb-3">
                  <li>• Website & App Design</li>
                  <li>• Logo & Brand Identity</li>
                  <li>• Prototyping and Wireframing</li>
                  <li>• Landing Page Design</li>
                  <li>• User Journey Optimization</li>
                </ul>
                <button className="btn btn-outline-light btn-sm rounded-pill align-self-start">
                  Read more &gt;&gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

       <div className="core-services text-white py-5 d-flex justify-content-center">
        <div className="card square-card bg-dark text-light shadow">
          <div className="card-body h-100 d-flex flex-column">
            {/* Heading centered at top */}
            <div className="text-center mb-3">
              <h3 className="fw-bold mb-0">Blockchain Development</h3>
            </div>

            {/* Horizontal split: image left, content right */}
            <div className="d-flex flex-grow-1">
              {/* Left - Image */}
              <div className="w-50 d-flex align-items-center justify-content-center p-3">
                <img src={appImage} alt="App Dev" className="img-fluid max-img" />
              </div>

              {/* Right - Text */}
              <div className="w-50 d-flex flex-column justify-content-center p-3">
                <ul className="list-unstyled small mb-3">
                  <li>• Metaverse Development</li>
                  <li>• ICO Development</li>
                  <li>• Custom Blockchain Development</li>
                  <li>• Crypto Currency Wallet Development</li>
                  <li>• NFT Development</li>
                  <li>
                    • Web3 Development
                  </li>
                  <li>
                    • Blockchain Game Development
                  </li>
                  <li>
                    • Crypto Exchange Software Development
                  </li>
                </ul>
                <button className="btn btn-outline-light btn-sm rounded-pill align-self-start">
                  Read more &gt;&gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

<div className="core-services text-white py-5 d-flex justify-content-center">
        <div className="card square-card bg-dark text-light shadow">
          <div className="card-body h-100 d-flex flex-column">
            {/* Heading centered at top */}
            <div className="text-center mb-3">
              <h3 className="fw-bold mb-0">SEO & SMM</h3>
            </div>

            {/* Horizontal split: image left, content right */}
            <div className="d-flex flex-grow-1">
              {/* Left - Image */}
              <div className="w-50 d-flex align-items-center justify-content-center p-3">
                <img src={appImage} alt="App Dev" className="img-fluid max-img" />
              </div>

              {/* Right - Text */}
              <div className="w-50 d-flex flex-column justify-content-center p-3">
                <ul className="list-unstyled small mb-3">
                  <li>• Technical SEO Audits & Fixes</li>
                  <li>• On-Page & Off-Page SEO</li>
                  <li>• Google, Facebook, LinkedIn Ads</li>
                  <li>• Social Media Strategy & Management</li>
                  <li>• Analytics, Reporting & ROI Tracking</li>
                  <li>
                    • Web3 Development
                  </li>
                  <li>
                    • Blockchain Game Development
                  </li>
                  <li>
                    • Crypto Exchange Software Development
                  </li>
                </ul>
                <button className="btn btn-outline-light btn-sm rounded-pill align-self-start">
                  Read more &gt;&gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    </>
  );
};

export default CoreServices;
