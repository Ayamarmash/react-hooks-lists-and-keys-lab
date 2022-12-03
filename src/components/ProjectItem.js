import React from "react";

function ProjectItem({ name, about, technologies }) {
  let count= 0
  const technologiesComponent = technologies.map((tech)=>{
    return <span key={count++}>{tech}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologiesComponent}
      </div>
    </div>
  );
}

export default ProjectItem;
