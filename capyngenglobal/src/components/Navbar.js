import React, { useState, useRef } from 'react';
import '../style.css';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
const [activeMenu, setActiveMenu] = useState('Perpetually Adaptive Enterprise');
  const dropdownTimer = useRef(null);

const menuData = {
  'Perpetually Adaptive Enterprise': {
    items: [
      { title: 'Digital Transformation', slug: 'digital-transformation' },
      { title: 'Agile Enterprises', slug: 'agile-enterprises' },
      { title: 'Modernization', slug: 'modernization' },
    ],
  },
  'Industries': {
    columns: 3,
    items: [
      { title: 'Banking', slug: 'banking' },
      { title: 'Education', slug: 'education' },
      { title: 'Capital Market', slug: 'capital-market' },
      { title: 'Life Science', slug: 'life-science' },
      { title: 'Consumer Packaged Goods & Distribution', slug: 'consumer-packaged-goods' },
      { title: 'Healthcare & Fitness', slug: 'healthcare-fitness' },
      { title: 'Energy, Resources and Utilities', slug: 'energy-resources-utilities' },
      { title: 'Manufacturing', slug: 'manufacturing' },
      { title: 'Public Service', slug: 'public-service' },
      { title: 'Retail', slug: 'retail' },
      { title: 'High Tech', slug: 'high-tech' },
      { title: 'Travel and Logistics', slug: 'travel-logistics' },
      { title: 'Insurance', slug: 'insurance' },
      { title: 'Communication, Media and Information Services', slug: 'communication-media' },
      { title: 'Real Estate', slug: 'real-estate' },
      { title: 'Gaming', slug: 'gaming' },
      { title: 'E-commerce', slug: 'ecommerce' },
      { title: 'Oil & Gas', slug: 'oil-gas' },
      { title: 'Automotive', slug: 'automotive' },
      { title: 'On Demand', slug: 'on-demand' },
    ],
  },
 'Services': {
  columns: 3,
  items: [
    { title: 'App Development', slug: 'applications-development' },
    { title: 'Web Development', slug: 'web-development' },
    { title: 'E-Commerce Development', slug: 'ecommerce-development' },
    { title: 'Custom AI & ChatGPT Solutions', slug: 'custom-ai-solution' },
    { title: 'UI/UX Design', slug: 'ui-ux-development' },
    { title: 'Blockchain Development', slug: 'blockchain-development' },
    { title: 'SEO & SMM', slug: 'seo-smm' },
    { title: 'DevOps Solutions', slug: 'devops-solutions' },
    { title: 'CRM & Management Software', slug: 'crm-management-software' },
    { title: 'Application Solutions', slug: 'application-solutions' },
    { title: 'Consulting', slug: 'consulting' },
    { title: 'Data and Analytics', slug: 'data-analytics' },
    { title: 'Enterprise Solution', slug: 'enterprise-solution' },
    { title: 'Network Solutions and Services', slug: 'network-solutions-services' },
    { title: 'Cybersecurity', slug: 'cybersecurity' },
    { title: 'Artificial Intelligence', slug: 'artificial-intelligence' },
  ]
},
  'Enterprise & AI': {
    items: [
      { title: 'Blockchain Development', slug: 'blockchain-development' },
      { title: 'Metaverse Development', slug: 'metaverse-development' },
      { title: 'Web3 Development', slug: 'web3-development' },
    ],
  },
};


  const handleMouseEnter = () => {
    clearTimeout(dropdownTimer.current);
    setShowDropdown(true);
  };

 const handleMouseLeave = () => {
  dropdownTimer.current = setTimeout(() => {
    setShowDropdown(false);
    setActiveMenu('Perpetually Adaptive Enterprise');
  }, 300);
};


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black position-relative">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4 text-white" href="/">CAPYNGEN</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="mainNavbar">
            <ul className="navbar-nav text-center">
              <li
                className="nav-item position-relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a className="nav-link text-white fw-semibold" href="#">What we do ▾</a>
              </li>
              <li className="nav-item"><a className="nav-link text-white" href="#">Who we are</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#">Insights</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#">Careers</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#">Newsroom</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#">Investors</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#">Worldwide</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {showDropdown && (
        <div
          className={`mega-dropdown d-flex ${showDropdown ? 'visible' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Left Category */}
          <div className="dropdown-left">
            <ul className="list-unstyled">
              {Object.keys(menuData).map((key) => (
                <li
                  key={key}
                  onMouseEnter={() => setActiveMenu(key)}
                  className={activeMenu === key ? 'active' : ''}
                >
                  <a href="services">{key} <span className="float-end">›</span></a>
                </li>
              ))}
            </ul>
          </div>

          <div className="dropdown-right">
        {activeMenu && (
  <div className={`submenu-grid columns-${menuData[activeMenu].columns || 1}`}>
    {menuData[activeMenu].items.map((item, index) => (
      <a
        key={index}
        href={`/${activeMenu.toLowerCase().replace(/ & | /g, '-').replace(/[()]/g, '').replace(/,+/g, '')}/${item.slug}`}
        className="submenu-item"
      >
        {item.title}
      </a>
    ))}
  </div>
)}

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
