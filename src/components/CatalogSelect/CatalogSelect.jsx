import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

import s from './CatalogSelect.module.scss';

const CatalogSelect = ({title = 'Brand', data=[], id, selected, setSelected}) => {

  const [isActive, setIsActive] = useState(false);

  // const [selected, setSelected] = useState([]);

  // const onRemoveSelected = (e) => {
  //   const value = e.target.value;

  //   console.dir(e.target);
  //   const arr = selected.filter(item => item !== value)
  //   setSelected(arr)
  // }

  return (
    <div
      className={s.container}
      tabIndex={0}
      onBlur={() => { setIsActive(false) }}
    >
      <div className={s.select}
        onClick={(e) => setIsActive(!isActive)}
      >
        {/* <div> */}
        {title}
        {/* </div> */}
      </div>

      <ul className={s.selected_block}>
        {
          selected.map((item,i) => {
            return (
              <li
                className={s.checkbox_container}
                key={uuidv4()}
              >
                <input
                  className={s.checkbox}
                  type='checkbox'
                  id={`#checkbox${i+id}`}
                  value={item}
                  onClick={() => {
                    setSelected(prev => (
                      prev.filter(value => value !== item)
                    ))
                  }}
                />
                <label
                  htmlFor={`#checkbox${i+id}`}
                  data-checked={selected.includes(item) ? '✓' : ''}
                >{item}</label>
              </li>
            )
          })
        }



      </ul>

      <div
        className={s.options}
        style={{ display: isActive ? "block" : "none" }}
      >
        {
          data.map((item, i) => (

            <li
              className={`${s.checkbox_container} ${s.option} `}
              onClick={() => {
                setSelected(prev => {
                  if (selected.includes(item)) {
                    return selected.filter(value => value !== item)
                  } else {
                    return [...prev, item]
                  }
                })
              }}
              key={uuidv4()}
            >
              <input
                className={s.checkbox}
                type='checkbox'
                id={`#checkbox${id + i}`}
                value={item}
              />
              <label htmlFor={`#checkbox${id + i}`} data-checked={selected.includes(item) ? '✓' : ''} >{item}</label>
            </li>

          ))
        }
      </div>
    </div>
  )
}

export default CatalogSelect;