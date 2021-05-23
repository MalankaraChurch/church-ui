import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Toolbar.scss";

enum NavItem {
  HOME,
  ACTIVITIES,
  EVENTS,
  HISTORY,
  CONTACT_US,
}

type ToolbarProps = {};

const Toolbar: React.FC<ToolbarProps> = (props: ToolbarProps) => {
  const [activeItem, setActiveItem] = useState<NavItem>(NavItem.HOME);

  const handleNavLinkClick = (item: NavItem) => {
    setActiveItem(item);
  };

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li
          className={`navbar__list-item ${
            activeItem === NavItem.HOME ? "navbar__list-item--active" : ""
          }`}
        >
          <NavLink
            to="/"
            exact
            className="navbar__link"
            onClick={() => handleNavLinkClick(NavItem.HOME)}
          >
            Home
          </NavLink>
        </li>
        <li
          className={`navbar__list-item ${
            activeItem === NavItem.ACTIVITIES ? "navbar__list-item--active" : ""
          }`}
        >
          <NavLink
            to="/activities"
            exact
            className="navbar__link"
            onClick={() => handleNavLinkClick(NavItem.ACTIVITIES)}
          >
            Activities
          </NavLink>
        </li>
        <li
          className={`navbar__list-item ${
            activeItem === NavItem.EVENTS ? "navbar__list-item--active" : ""
          }`}
        >
          <NavLink
            to="/events"
            exact
            className="navbar__link"
            onClick={() => handleNavLinkClick(NavItem.EVENTS)}
          >
            Events
          </NavLink>
        </li>
        <li
          className={`navbar__list-item ${
            activeItem === NavItem.HISTORY ? "navbar__list-item--active" : ""
          }`}
        >
          <NavLink
            to="/history"
            exact
            className="navbar__link"
            onClick={() => handleNavLinkClick(NavItem.HISTORY)}
          >
            History
          </NavLink>
        </li>
        <li
          className={`navbar__list-item ${
            activeItem === NavItem.CONTACT_US ? "navbar__list-item--active" : ""
          }`}
        >
          <NavLink
            to="/contact-us"
            exact
            className="navbar__link"
            onClick={() => handleNavLinkClick(NavItem.CONTACT_US)}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Toolbar;
