import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../utils/icons/Rendersee-logo.png';
import './DashboardHeader.scss';

export function DashboardHeader() {

  const navigate = useNavigate()

  return (
    <div className="dashboard-header">
      <div className="dashboard-header__logo-block">
        <img src={logo} alt="dashboard-logo" />
      </div>

      <div className="dashboard-header__container">
        <button

          className="dashboard-header__go-back"
          onClick={() => navigate(-1)}
        >
          Go back
        </button>
        <div className="dashboard-header__create-project-block">
          <button className="dashboard-header__new-project-button"> Create New Project</button>
          <button className="dashboard-header__bell"></button>
        </div>
      </div>
    </div>
  );
}

