import React from "react";
import { CardGallery } from "../index";
import s from './Projects.module.scss'
import { useSelector } from "react-redux";

function Projects() {

  const projects = useSelector(state => state.user?.projects)

  return (
    <div className={s.container}>
      {!!projects && <CardGallery cards={projects.data} title={projects.title} />}
    </div>
  );
}

export default Projects;