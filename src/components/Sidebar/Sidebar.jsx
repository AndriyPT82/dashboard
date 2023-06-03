import { Link, NavLink } from "react-router-dom";
import dashboard_icon from 'utils/icons/dashboard_icon.svg'
import projects_icon from 'utils/icons/projects_icon.svg'
import saved_icon from 'utils/icons/saved_icon.svg'
import settings_icon from 'utils/icons/settings_icon.svg'
import help_center_icon from 'utils/icons/help_center_icon.svg'

import './Sidebar.scss';
import { SmallAccountDetails } from "components";

const links = [
  { path: '/', title: 'Dashboard', icon: dashboard_icon },
  { path: 'projects', title: 'Projects', icon: projects_icon },
  { path: 'saved', title: 'Saved', icon: saved_icon },
  { path: 'settings', title: 'Settings', icon: settings_icon },
  { path: 'help_center', title: 'Help Center', icon: help_center_icon },
]

const handleSelectedLink = (isActive, className) => {
  return `${className} ` + (isActive ? `${className}--active` : '')
}

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar__links">

        {
          links.map(({ path, title, icon }, index) => (
            <li className="sidebar__link-wrapper" key={index}>
              <NavLink
                to={path}
                className={({ isActive }) => handleSelectedLink(isActive, 'sidebar__link')}
                style={{ backgroundImage: `url(${icon})` }}
              >
                {title}
              </NavLink>
            </li>
          ))
        }


      </ul>

      <div className="sidebar__auth">
        <Link to={'account_details'}>
          <SmallAccountDetails />
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
