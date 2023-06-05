import { Fragment } from "react";
import { v4 as uuidv4 } from 'uuid';
import s from './CardGallery.module.scss';
import { Card } from "../index";


function CardGallery({ cards, title }) {

  return (
    <div className={s.container} style={{ minHeight: `${500}px` }} >
      <h3>{title}</h3>
      <div className={s.cards_wrapper} >
        <div className={s.cards}>
          {cards.map((card) => {
            return <Fragment key={uuidv4()}>
              <Card card={card} isVisible={true} />
            </Fragment>
          })}
        </div>
      </div>
    </div>
  );
}

export default CardGallery;