import React from "react";
import { Link } from "react-router-dom";
import logo from '../../utils/icons/Rendersee-logo.png';
import './DashboardHeader.scss';

export function DashboardHeader() {
  return (
    <div className="dashboard-header">
    <div className="dashboard-header__logo-block">
      <img src={logo} alt="dashboard-logo" />
      </div>

      <div className="dashboard-header__container">
      <Link to={"/"} className="dashboard-header__go-back">Go back</Link>
      <div className="dashboard-header__create-project-block">
        <button className="dashboard-header__new-project-button"> Create New Project</button>
        <button className="dashboard-header__bell"></button>
      </div>
      </div>
    </div>
  );
}

