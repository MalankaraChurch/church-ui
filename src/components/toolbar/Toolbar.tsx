import React from "react";
import "./Toolbar.scss";
import { NavLink } from "react-router-dom";

type ToolbarProps = {};

const Toolbar: React.FC<ToolbarProps> = (props: ToolbarProps) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/activities" exact>
              Activities
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" exact>
              Events
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Toolbar;
