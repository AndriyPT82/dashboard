import { Link, NavLink } from "react-router-dom";
import dashboard_icon from 'utils/icons/dashboard_icon.svg'
import projects_icon from 'utils/icons/projects_icon.svg'
import settings_icon from 'utils/icons/settings_icon.svg'
import help_center_icon from 'utils/icons/help_center_icon.svg'

// import './Sidebar.scss';
import s from './Sidebar.module.scss';
import { DropdownSidebar, SmallAccountDetails } from "components";

const links = [
  { path: '/', title: 'Dashboard', icon: dashboard_icon },
  { path: 'projects', title: 'Projects', icon: projects_icon },

  { path: 'settings', title: 'Settings', icon: settings_icon },
  { path: 'help_center', title: 'Help Center', icon: help_center_icon },
]

const handleSelectedLink = (isActive, className) => {
  return `${className} ` + (isActive ? s.active : '')
}

function Sidebar() {

  return (
    <div className={s.container}>
      <ul className={s.links}>
        {
          links.map(({ path, title, icon }, index) => (
            <li
              className={s.link_wrapper} 
              key={index}
              style={{order: index}}
              >
              <NavLink
                to={path}
                className={({ isActive }) => handleSelectedLink(isActive, s.link)}
                style={{backgroundImage: `url(${icon})`}}
              >
                {title}
              </NavLink>
            </li>
          ))
        }
        <DropdownSidebar />
      </ul>

      <div className={s.auth}>
        <Link to={'account_details'}>
          <SmallAccountDetails handleSelectedLink={handleSelectedLink} />
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
