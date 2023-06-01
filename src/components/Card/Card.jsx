import React from "react";
import './Card.scss';
import { Link } from "react-router-dom";

export function Card({image, title, description,}) {
  return (
    <li className="card">
      <div className="card__image"></div>
      <div className="card__info">
        <h3 className="card__title">Bathroom</h3>
        <h5 className="card__description">Created 23.08.2022</h5>
      </div>
      <Link to={'/'} className="card__link" > View project </Link>

    </li>
  );
}

