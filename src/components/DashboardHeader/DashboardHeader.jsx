import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from 'utils/icons/rendersee_logo.svg';
import s from './DashboardHeader.module.scss';

function DashboardHeader() {

  const navigate = useNavigate()

  return (
    <div className={s.container}>

      <div className={s.logo_block}>
        <Link onClick={() => { console.log('Redirect to Home Page') }} >
          <img src={logo} alt="dashboard-logo" />
        </Link>
      </div>
      <div className={s.buttons}>
        <button
          className={s.go_back}
          onClick={() => navigate(-1)}
        >
          Go back
        </button>
        <div className={s.create_project_block}>
          <button
            className={s.new_project_button}
            onClick={() => console.log(' New Project is still under development')}
          >
            Create New Project
          </button>
          <button
            className={s.bell}
            onClick={() => console.log(' Bell is still under development')}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;