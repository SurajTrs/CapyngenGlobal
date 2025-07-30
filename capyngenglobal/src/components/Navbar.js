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

  // REVISED menuData structure for multi-level nesting demonstration
  // Ensure your actual menuData matches this structure for nesting to work
  const menuData = {
    'What We Offer': {
      items: [
        {
          title: 'Perpetually Adaptive Enterprise',
          slug: 'perpetually-adaptive-enterprise',
          subItems: [ // Nested sub-items for 'Perpetually Adaptive Enterprise'
            { title: 'Digital Transformation', slug: 'digital-transformation' },
            { title: 'Agile Enterprises', slug: 'agile-enterprises' },
            { title: 'Modernization', slug: 'modernization' },
            { // Example of a 3rd level of nesting
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
      columns: 3, // Only relevant for desktop mega-menu layout
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

  // Helper function to generate URL-friendly slugs from titles
  const generateSlug = (title) => {
    return title.toLowerCase().replace(/ & /g, '-and-').replace(/ /g, '-').replace(/[()]/g, '').replace(/,+/g, '');
  };

  // Handlers for the DESKTOP mega-dropdown hover behavior
  const handleDesktopMouseEnter = (menuKeyToActivate = 'What We Offer') => {
    clearTimeout(dropdownTimer.current);
    setShowDropdown(true);
    setActiveMenu(menuKeyToActivate);
  };

  const handleDesktopMouseLeave = () => {
    dropdownTimer.current = setTimeout(() => {
      setShowDropdown(false);
    }, 300); // Small delay to allow mouse to move between trigger and dropdown
  };

  // Handler for top-level mobile menu category expansion
  // This is for the main categories like "What We Offer", "Industries", etc.
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


          {/* Navbar Toggler for Mobile (controlled by Bootstrap JS) */}
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
  className={`navbar-collapse justify-content-center ${isMobileNavOpen ? 'show d-block' : 'collapse'}`}
  id="mainNavbar"
>
            <ul className="navbar-nav text-center w-100">

              {/* Desktop "What We Offer" Link - Visible only on large screens */}
              <li
                className="nav-item position-relative d-none d-lg-block dropdown-trigger"
                onMouseEnter={() => handleDesktopMouseEnter('What We Offer')}
                onMouseLeave={handleDesktopMouseLeave}
              >
                <a className="nav-link text-white fw-semibold" href="#">What We Offer ▾</a>
              </li>

              {/* Mobile Menu Structure - Visible only on small screens */}
              {/* This entire section is rendered when the main Bootstrap navbar is expanded on mobile */}
              <li className="nav-item d-lg-none w-100 px-3 py-2">
                {/* Iterate over the top-level categories for mobile (e.g., "What We Offer", "Industries") */}
                {Object.keys(menuData).map((key) => (
                  <div key={key} className="mobile-submenu-container mb-2">
                    <button
                      className="mobile-submenu-toggle w-100 text-start text-white d-flex justify-content-between align-items-center"
                      onClick={() => toggleMobileTopLevelMenu(key)} // Toggles the expansion of this top-level category
                      aria-expanded={openMobileMenus[key] ? 'true' : 'false'}
                      aria-controls={`mobile-top-level-submenu-${generateSlug(key)}`}
                    >
                      <span>{key}</span>
                      <span className="toggle-icon">{openMobileMenus[key] ? '▴' : '▾'}</span>
                    </button>
                    {/* Only render the sub-items if this top-level category is open */}
                    {openMobileMenus[key] && (
                      <ul id={`mobile-top-level-submenu-${generateSlug(key)}`} className="list-unstyled mobile-submenu-level">
                        {/* Render MobileMenuItem for each item within this top-level category */}
                        {/* MobileMenuItem itself is recursive and handles deeper nesting */}
                        {menuData[key].items.map((item, index) => (
                          <MobileMenuItem
                            key={index}
                            item={{ ...item, parentKey: key }} // Pass top-level key as parent for initial items
                            generateSlug={generateSlug}
                            level={0} // Start level 0 for items directly under a top-level category
                          />
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </li>

              {/* Static navigation links visible on both desktop and mobile */}
              {/* These links will appear directly in the main mobile menu, below the expandable categories */}
              <li className="nav-item">
                <a className="nav-link text-white" href="/company-overview">Company Overview</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/careers">Careers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/news-updates">News & Updates</a>
              </li>
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
          // Hide on small screens, show as flex on large screens
          className={`mega-dropdown d-none d-lg-flex ${showDropdown ? 'visible' : ''}`}
          onMouseEnter={() => clearTimeout(dropdownTimer.current)} // Keep dropdown open when mouse enters it
          onMouseLeave={handleDesktopMouseLeave} // Close dropdown when mouse leaves it
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
                  {/* Link to category overview page (desktop version) */}
                  <a href={`/${generateSlug(key)}`}>{key} <span className="float-end">›</span></a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content Panel of Desktop Mega Dropdown */}
          <div className="dropdown-right">
            {activeMenu && menuData[activeMenu] && (
              <div className={`submenu-grid columns-${menuData[activeMenu].columns || 1}`}>
                {/* For desktop, we render items flat, regardless of `subItems` */}
                {menuData[activeMenu].items.map((item, index) => (
                  <a
                    key={index}
                    // For desktop, link directly to the item's slug or its main category if no specific item slug
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