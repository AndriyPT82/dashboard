import React from "react";
import { v4 as uuidv4 } from 'uuid';
import './CardGallery.scss';
import { Card } from "../Card/Card";


export function CardGallery({ cards, title }) {
  return (
    <div className="card-gallery">
      <h2 className="card-gallery__title">{title}</h2>
      <div className="card-gallery__cards-wrapper" >
        <div className="card-gallery__cards">

          {new Array(8).fill(1).map((card) => (
            <React.Fragment key={uuidv4()}>
              <Card card={card} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

