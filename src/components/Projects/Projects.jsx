import React from "react";
import { CardGallery } from "../CardGallery/CardGallery";
import './Projects.scss';


export function Projects({ cards, title="Projects" }) {
  return (
    <>
    <CardGallery cards={cards} title={title} />
    </>
  );
}

