import React from 'react';
import appDevImage from '../../assets/app-dev-image.png';
import webDevImage from '../../assets/web-dev-image.png';
import ecommerceImage from '../../assets/ecommerce-image.png';
import aiChatGptImage from '../../assets/ai-chatgpt-image.png';
import uiUxImage from '../../assets/ui-ux-image.png';
import blockchainImage from '../../assets/blockchain-image.png';
import seoSmmImage from '../../assets/seo-smm-image.png';
import devopsImage from '../../assets/devops-image.png';
import crmImage from '../../assets/crm-image.png';
import applicationSolutionsImage from '../../assets/application-solutions-image.png';
import consultingImage from '../../assets/consulting-image.png';
import dataAnalyticsImage from '../../assets/data-analytics-image.png';
import enterpriseImage from '../../assets/enterprise-image.png';
import networkSolutionsImage from '../../assets/network-solutions-image.png';
import cybersecurityImage from '../../assets/cybersecurity-image.png';
import artificialIntelligenceImage from '../../assets/artificial-intelligence-image.png';


import '../../style.css';

const CoreServices = () => {
  const servicesData = [
    {
      title: "App Development",
      items: [
        "Android, iOS & Hybrid App Development",
        "Custom Mobile Solutions",
        "SaaS and Cloud-Based Apps",
        "Food Delivery, Cab Booking, Logistics & Grocery Apps",
        "App Maintenance & Scaling"
      ],
      link: "services/applications-development",
      image: appDevImage
    },
    {
      title: "Web Development",
      items: [
        "Website & CMS Development (WordPress, Joomla, Drupal)",
        "Custom Platforms using PHP, Laravel, Angular, NodeJS & ReactJS",
        "API Development & Integration",
        "Webflow Development",
        "Outsourced Web Projects"
      ],
      link: "services/web-development",
      image: webDevImage
    },
    {
      title: "E-Commerce Development",
      items: [
        "Shopify, Magento, WooCommerce, VirtueMart Platforms",
        "Product Pages & Checkout Optimization",
        "Secure Payment Gateway Integration",
        "Multi-vendor Marketplace Solutions",
        "Headless Commerce Implementation"
      ],
      link: "services/ecommerce-development",
      image: ecommerceImage
    },
    {
      title: "Custom AI & Chat GPT Solutions",
      items: [
        "AI Chatbot Development",
        "Custom AI Model Design",
        "ChatGPT API Integration",
        "Predictive Analytics & Automation Tools",
        "AI for CRM, Sales, and Support"
      ],
      link: "services/ai-chatgpt-solutions",
      image: aiChatGptImage
    },
    {
      title: "UI/UX Design",
      items: [
        "Website & App Design",
        "Logo & Brand Identity",
        "Prototyping and Wireframing",
        "Landing Page Design",
        "User Journey Optimization"
      ],
      link: "services/ui-ux-design",
      image: uiUxImage
    },
    {
      title: "Blockchain Development",
      items: [
        "Metaverse Development",
        "ICO Development",
        "Custom Blockchain Development",
        "Crypto Currency Wallet Development",
        "NFT Development",
        "Web3 Development",
        "Blockchain Game Development",
        "Crypto Exchange Software Development"
      ],
      link: "services/blockchain-development",
      image: blockchainImage
    },
    {
      title: "SEO & SMM",
      items: [
        "Technical SEO Audits & Fixes",
        "On-Page & Off-Page SEO",
        "Google, Facebook, LinkedIn Ads",
        "Social Media Strategy & Management",
        "Analytics, Reporting & ROI Tracking"
      ],
      link: "services/seo-smm",
      image: seoSmmImage
    },
    {
      title: "DevOps Solutions",
      items: [
        "Hire DevOps Services"
      ],
      link: "services/devops-solutions",
      image: devopsImage
    },
    {
      title: "CRM & Management Software",
      items: [
        "Hotel Management",
        "Hospital Management",
        "HR & Payroll Management",
        "Salon Management",
        "School & Institute Management",
        "Custom CRM Development"
      ],
      link: "services/crm-management-software",
      image: crmImage
    },
    {
      title: "Application Solutions",
      items: [
        "Food Delivery App",
        "Logistic App",
        "Cab Booking App",
        "Pickup & Delivery App",
        "Grocery Delivery App",
        "Pharmacy App",
        "Education App"
      ],
      link: "services/application-solutions",
      image: applicationSolutionsImage
    },
    {
      title: "Consulting",
      items: [],
      link: "services/consulting",
      image: consultingImage
    },
    {
      title: "Data and Analytics",
      items: [],
      link: "services/data-analytics",
      image: dataAnalyticsImage
    },
    {
      title: "Enterprise Solution",
      items: [],
      link: "services/enterprise-solutions",
      image: enterpriseImage
    },
    {
      title: "Network Solutions and Services",
      items: [],
      link: "services/network-solutions",
      image: networkSolutionsImage
    },
    {
      title: "Cybersecurity",
      items: [],
      link: "services/cybersecurity",
      image: cybersecurityImage
    },
    {
      title: "Artificial Intelligence",
      items: [],
      link: "services/artificial-intelligence",
      image: artificialIntelligenceImage
    }
  ];

  return (
    <>
      <section className='pagemain'>
        <h1 className="core-title text-white py-5 text-center mb-5 display-3">OUR CORE SERVICES</h1>

        {servicesData.map((service, index) => (
          <div className="core-services text-white py-2 d-flex justify-content-center" key={index}>
            <div className="card square-card bg-dark text-light shadow">
              <div className="card-body h-100 d-flex flex-column">
                {/* Heading centered at top */}
                <div className="text-center mb-3">
                  <h3 className="fw-bold mb-0">{service.title}</h3>
                </div>

                {/* Horizontal split: image left, content right */}
                <div className="d-flex flex-grow-1">
                  {/* Left - Image */}
                  <div className="w-50 d-flex align-items-center justify-content-center p-3">
                    {/* Use service.image here */}
                    <img src={service.image} alt={service.title} className="img-fluid max-img" />
                  </div>

                  {/* Right - Text */}
                  <div className="w-50 d-flex flex-column justify-content-center p-3">
                    {service.items.length > 0 && (
                      <ul className="list-unstyled small mb-3">
                        {service.items.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    )}
                    <a
                      href={service.link}
                      className="btn btn-outline-light btn-sm rounded-pill align-self-start"
                    >
                      Read more &gt;&gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default CoreServices;