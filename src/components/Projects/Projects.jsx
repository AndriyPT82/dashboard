import React from "react";
import { CardGallery } from "../index";

 function Projects({ cards, title="Projects" }) {
  return (
    <>
    <CardGallery cards={cards} title={title} />
    </>
  );
}

export default Projects;