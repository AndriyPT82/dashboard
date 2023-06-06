import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import dropbown_icon from 'utils/icons/dropbown_icon.svg'

import s from './CatalogSelect.module.scss';


const options = []

const CatalogSelect = () => {

  const [isActive, setIsActive] = useState(false);

  const [selected, setSelected] = useState([
    'apple'
  ]);

  const onRemoveSelected = (e) => {
    const value = e.target.value;

    setSelected(prev => (
      prev.filter(item => item !== value)
    ))
  }

  return (
    <div className={s.container}>
      <div className={s.select}>
        {/* <div
          onClick={(e) => setIsActive(!isActive)}
          className={selected === 'Choose one' ? s.link : `${s.link} ${s.active}`}
          // style={{ backgroundImage: `url(${dropbown_icon})` }}
        > */}
        Brand
        {/* </div> */}
      </div>

      <ul className={s.selected_block}>
        {
          selected.map(item => (
            <li className={s.checkbox_container}>
              <input
                className={s.checkbox}
                type='checkbox'
                id='#checkbox'
                value={item}
                onClick={onRemoveSelected}
              />
              <label htmlFor='#checkbox' data-checked={selected.includes(item) ? '✓' :''}>apple</label>
            </li>
          ))
        }
      </ul>


      <div style={{ display: isActive ? "block" : "none" }}>
        {/* {
          options.map(({ path, title, icon }, index) => (
            <li className={s.link_wrapper} key={index} tabIndex={0}>
              <NavLink
                to={path}
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
        } */}

      </div>
    </div>
  )
}

export default CatalogSelect;