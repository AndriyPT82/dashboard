import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import dropbown_icon from 'utils/icons/dropbown_icon.svg'

import s from './DropdownSidebar.module.scss';

const links = [
  { path: 'uploads', title: 'Uploads', icon: 'help_center_icon.png' },
  { path: 'catalog', title: 'Catalog', icon: 'help_center_icon.png' },
  { path: 'favorites', title: 'Favorites', icon: 'help_center_icon.png' },
  { path: 'textures', title: 'Textures', icon: 'help_center_icon.png' }
]

const handleSelectedLink = (isActive, className) => {
  return `${className} ` + (isActive ? s.active : '')
}

const  DropdownSidebar = () => {

  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Choose one");

  const location = useLocation()

  useEffect(() => {
    if (links.map(obj => obj.path).includes(location.pathname.slice(1))) return;
    setIsSelected('Choose one')
    setIsActive(false)
  }, [location.pathname])

  return (
    <ul className={s.container}>
      <li className={s.link_wrapper}>
        <div
          onClick={(e) => setIsActive(!isActive)}
          className={selected === 'Choose one' ? s.link : `${s.link} ${s.active}`}
          style={{ backgroundImage: `url(${dropbown_icon})` }}
        >
          {selected}
        </div>
      </li>

      <div style={{ display: isActive ? "block" : "none" }}>
        {
          links.map(({ path, title, icon }, index) => (

            <li className={s.link_wrapper} key={index} tabIndex={0}>
              <NavLink
                to={path}
                className={({ isActive }) => handleSelectedLink(isActive, s.link)}
                style={{ backgroundImage: `url(${icon})` }}
                onClick={(e) => {
                  setIsSelected(e.target.textContent);
                  setIsActive(!isActive);
                }}
              >
                {title}
              </NavLink>
            </li>
          ))
        }
      </div>
    </ul>

  )
}

export default DropdownSidebar
  ;