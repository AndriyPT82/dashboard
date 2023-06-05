import React from "react";
import './Card.module.scss';
import { Link, useLocation } from "react-router-dom";
import tile_TEST from 'utils/images/tile_TEST.png'
import s from './Card.module.scss'

function Card({ image, title, description, isVisible }) {
  const location = useLocation().pathname.slice(1)

  return (
    <li className={s.container}>
      <img src={tile_TEST} alt="card_image"/>
      <div className={s.info}>
        <h3 className={s.title}>Bathroom</h3>
        <h4 className={s.description}>Created 23.08.2022</h4>
        {location !== 'projects' && <h5 className={s.category}>tile</h5>}
      </div>
      {
        location === 'projects' && (
          <Link to={'/view_project'} className={s.link} > View project </Link>
        )
      }
    </li>
  );
}

export default Card;
