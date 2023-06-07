import React from "react";
import './Card.module.scss';
import { Link, useLocation } from "react-router-dom";
import tile_TEST from 'utils/images/tile_TEST.png'
import s from './Card.module.scss'

function Card({ image, title, description, isVisible }) {
  const location = useLocation().pathname.slice(1)

  return (
    <li className={s.container}>
      {
        location === 'catalog' && (
          <div className={s.company_container}>
            <div className={s.company_logo}></div>
            <h4>Company Name</h4>
          </div>
        )
      }
      <img src={tile_TEST} alt="card_image" />
      <div className={s.info}>
        {
          !['favorites', 'catalog'].includes(location) &&
          <h3 className={s.title}>Bathroom</h3>
        }
        <h4 className={s.description}>
          Texture Size
        </h4>

        {!['projects', 'catalog', 'favorites'].includes(location)  && <h5 className={s.category}>tile</h5>}
        {['favorites', 'catalog'].includes(location) && <button
          className={s.favorit}
          onClick={() => console.log('added to favorites')}
        ></button>}
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
