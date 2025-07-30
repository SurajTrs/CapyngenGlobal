// src/components/Navbar/MobileMenuItem.jsx
import React, { useState } from 'react';

const MobileMenuItem = ({ item, generateSlug, level = 0 }) => {
  // Each MobileMenuItem manages its own 'isOpen' state for its direct children
  const [isOpen, setIsOpen] = useState(false);

  const hasSubItems = item.subItems && item.subItems.length > 0;
  const itemSlug = generateSlug(item.title);

  // Construct the link path.
  // If an item has a 'slug', use it. Otherwise, generate a slug from its title.
  // The 'parentKey' is used to build nested URLs correctly.
  const linkPath = item.slug
    ? `/${generateSlug(item.parentKey || '')}/${item.slug}`
    : `/${generateSlug(item.parentKey || '')}/${itemSlug}`;

  const toggleOpen = (e) => {
    // If this item has sub-items, prevent the default link behavior
    // and instead toggle its submenu's visibility.
    if (hasSubItems) {
      e.preventDefault(); // Stop the link from navigating
      setIsOpen(!isOpen); // Toggle the state for this specific submenu
    }
    // If it's a leaf item (no sub-items), allow the default link behavior (navigation)
  };

  // Calculate left padding for visual indentation based on nesting level
  // This helps visually distinguish nested menu items.
  const getPaddingLeft = () => {
    // Base padding of 1.5rem for the first level of items within a top-level category,
    // plus an additional 1.5rem for each deeper level.
    return `${1.5 + level * 1.5}rem`;
  };

  return (
    <li>
      <div
        className="d-flex justify-content-between align-items-center mobile-menu-item-wrapper"
        style={{ paddingLeft: getPaddingLeft() }} // Apply dynamic padding here
      >
        <a
          href={linkPath}
          onClick={toggleOpen} // Handles both navigation and submenu toggling
          className={`text-white d-block py-2 mobile-menu-link ${hasSubItems ? 'mobile-menu-category' : ''}`}
          style={{ flexGrow: 1 }} // Allows the link text to take available space
        >
          {item.title}
        </a>
        {hasSubItems && ( // Only show the toggle button if there are sub-items
          <button
            className="btn btn-link text-white mobile-toggle-btn"
            onClick={toggleOpen} // Explicitly toggles the submenu
            aria-expanded={isOpen} // For accessibility: indicates if the submenu is expanded
            aria-controls={`submenu-${itemSlug}`} // Links to the ID of the controlled submenu
          >
            {isOpen ? '▴' : '▾'} {/* Up or down arrow based on state */}
          </button>
        )}
      </div>

      {/* Conditionally render the nested submenu if it has sub-items AND it is open */}
      {hasSubItems && isOpen && (
        <ul id={`submenu-${itemSlug}`} className="list-unstyled mobile-submenu-level">
          {item.subItems.map((subItem, idx) => (
            <MobileMenuItem
              key={idx}
              // Pass the current item's slug (or generated slug) as parentKey for the next level
              item={{ ...subItem, parentKey: item.slug || itemSlug }}
              generateSlug={generateSlug}
              level={level + 1} // Increment the level for deeper nesting
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MobileMenuItem;