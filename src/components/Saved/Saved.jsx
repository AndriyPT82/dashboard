import React from "react";
import { CardGallery } from "../CardGallery/CardGallery";
import { handleSelectedLink } from "../../utils/assets/handleSelectedLink";
import './Saved.scss';
import { NavLink } from "react-router-dom";



export function Saved({ cards, title = "Saved" }) {
  return (
    <>
<div className="saved__links">
        <NavLink
          to={'/all'}
          className={({ isActive }) => handleSelectedLink(isActive, 'saved__link')}
        > All </NavLink>
        <NavLink
          to={'/templated'}
          className={({ isActive }) => handleSelectedLink(isActive, 'saved__link')}
        > Templated </NavLink>
        <NavLink
          to={'/downloades'}
          className={({ isActive }) => handleSelectedLink(isActive, 'saved__link')}
        > Downloads </NavLink>
      </div>

      <CardGallery cards={cards} title="Saved Tile" />
      <CardGallery cards={cards} title="Saved Rooms" />
    </>
  );
}

{/* <div className="saved__links">
        <NavLink
          to={'/all'}
          className={({ isActive }) => handleSelectedLink(isActive, 'saved__link')}
        > All </NavLink>
        <NavLink
          to={'/templated'}
          className={({ isActive }) => handleSelectedLink(isActive, 'saved__link')}
        > Templated </NavLink>
        <NavLink
          to={'/downloades'}
          className={({ isActive }) => handleSelectedLink(isActive, 'saved__link')}
        > Downloads </NavLink>
      </div> */}
