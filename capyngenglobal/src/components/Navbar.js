// src/components/Navbar/Navbar.jsx
import React, { useState, useRef } from 'react';
import '../style.css'; // Ensure your main stylesheet is linked
import MobileMenuItem from './MobileMenuItem'; // Import the recursive component

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false); // Controls desktop mega-dropdown visibility
  const [activeMenu, setActiveMenu] = useState('What We Offer'); // Desktop active category
  // This state controls the expansion of the *top-level* mobile categories (e.g., "What We Offer", "Industries")
  const [openMobileMenus, setOpenMobileMenus] = useState({});
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false); // Add at top of component

  const dropdownTimer = useRef(null); // Timer for desktop dropdown hover delay

  const menuData = {
    'What We Offer': {
      items: [
        {
          title: 'Perpetually Adaptive Enterprise',
          slug: 'perpetually-adaptive-enterprise',
          subItems: [
            { title: 'Digital Transformation', slug: 'digital-transformation' },
            { title: 'Agile Enterprises', slug: 'agile-enterprises' },
            { title: 'Modernization', slug: 'modernization' },
            {
              title: 'Advanced Methodologies',
              slug: 'advanced-methodologies',
              subItems: [
                { title: 'AI-Driven Processes', slug: 'ai-driven-processes' },
                { title: 'Cloud-Native Architectures', slug: 'cloud-native-architectures' },
                { title: 'DevSecOps Integration', slug: 'devsecops-integration' },
              ]
            }
          ]
        },
        { title: 'Customer Experience', slug: 'customer-experience' },
        { title: 'Data & Analytics Solutions', slug: 'data-analytics-solutions' },
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

  const generateSlug = (title) => {
    return title.toLowerCase().replace(/ & /g, '-and-').replace(/ /g, '-').replace(/[()]/g, '').replace(/,+/g, '');
  };

  const handleDesktopMouseEnter = (menuKeyToActivate = 'What We Offer') => {
    clearTimeout(dropdownTimer.current);
    setShowDropdown(true);
    setActiveMenu(menuKeyToActivate);
  };

  const handleDesktopMouseLeave = () => {
    dropdownTimer.current = setTimeout(() => {
      setShowDropdown(false);
    }, 300);
  };

  const toggleMobileTopLevelMenu = (key) => {
    setOpenMobileMenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black position-relative capy-navbar">
        <div className="container">
          <a className="navbar-brand capy-logo" href="/">
            <img
              src="/assets/Logo.png"
              alt="CAPYNGEN Logo"
              height="100"
              className="d-inline-block align-top"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsMobileNavOpen((prev) => !prev)}
            aria-expanded={isMobileNavOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`navbar-collapse justify-content-end ${isMobileNavOpen ? 'show d-block' : 'collapse'}`}
            id="mainNavbar"
          >
            <ul className="navbar-nav">

              {/* Added me-4 for spacing */}
              <li
                className="nav-item position-relative d-none d-lg-block dropdown-trigger me-4"
                onMouseEnter={() => handleDesktopMouseEnter('What We Offer')}
                onMouseLeave={handleDesktopMouseLeave}
              >
                <a className="nav-link text-white fw-semibold" href="#">What We Offer ▾</a>
              </li>

              {/* Mobile Menu Structure - This li handles the top-level mobile categories, no me-4 here */}
              <li className="nav-item d-lg-none w-100 px-3 py-2">
                {Object.keys(menuData).map((key) => (
                  <div key={key} className="mobile-submenu-container mb-2">
                    <button
                      className="mobile-submenu-toggle w-100 text-start text-white d-flex justify-content-between align-items-center"
                      onClick={() => toggleMobileTopLevelMenu(key)}
                      aria-expanded={openMobileMenus[key] ? 'true' : 'false'}
                      aria-controls={`mobile-top-level-submenu-${generateSlug(key)}`}
                    >
                      <span>{key}</span>
                      <span className="toggle-icon">{openMobileMenus[key] ? '▴' : '▾'}</span>
                    </button>
                    {openMobileMenus[key] && (
                      <ul id={`mobile-top-level-submenu-${generateSlug(key)}`} className="list-unstyled mobile-submenu-level">
                        {menuData[key].items.map((item, index) => (
                          <MobileMenuItem
                            key={index}
                            item={{ ...item, parentKey: key }}
                            generateSlug={generateSlug}
                            level={0}
                          />
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </li>

              {/* Added me-4 for spacing to desktop visible static links */}
              <li className="nav-item me-4">
                <a className="nav-link text-white" href="/company-overview">Company Overview</a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link text-white" href="/careers">Careers</a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link text-white" href="/news-updates">News & Updates</a>
              </li>
              {/* No me-4 on the last item to prevent unnecessary space at the end */}
              <li className="nav-item">
                <a className="nav-link text-white" href="/contact-us">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Desktop Mega Dropdown - Visible only on large screens (lg and up) */}
      {showDropdown && (
        <div
          className={`mega-dropdown d-none d-lg-flex ${showDropdown ? 'visible' : ''}`}
          onMouseEnter={() => clearTimeout(dropdownTimer.current)}
          onMouseLeave={handleDesktopMouseLeave}
        >
          {/* Left Category Panel of Desktop Mega Dropdown */}
          <div className="dropdown-left">
            <ul className="list-unstyled">
              {Object.keys(menuData).map((key) => (
                <li
                  key={key}
                  onMouseEnter={() => setActiveMenu(key)}
                  className={activeMenu === key ? 'active' : ''}
                >
                  <a href={`/${generateSlug(key)}`}>{key} <span className="float-end">›</span></a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content Panel of Desktop Mega Dropdown */}
          <div className="dropdown-right">
            {activeMenu && menuData[activeMenu] && (
              <div className={`submenu-grid columns-${menuData[activeMenu].columns || 1}`}>
                {menuData[activeMenu].items.map((item, index) => (
                  <a
                    key={index}
                    href={item.slug ? `/${generateSlug(activeMenu)}/${item.slug}` : `/${generateSlug(activeMenu)}`}
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