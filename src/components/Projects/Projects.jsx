import React from "react";
import { CardGallery } from "../index";
import s from './Projects.module.scss'

 function Projects({ cards, title=" My Projects" }) {
  return (
    <div className={s.container}>

    <CardGallery cards={cards} title={title} />
  </div>
  );
}

export default Projects;