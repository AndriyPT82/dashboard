import React from "react";
import './Card.module.scss';
import { Link } from "react-router-dom";
import s from './Card.module.scss'

function Card({image, title, description,}) {
  return (
    <li className={s.container}>
      <div className={s.image}></div>
      <div className={s.info}>
        <h3 className={s.title}>Bathroom</h3>
        <h5 className={s.description}>Created 23.08.2022</h5>
      </div>
      <Link to={'/view_project'} className={s.link} > View project </Link>
    </li>
  );
}

export default Card;
