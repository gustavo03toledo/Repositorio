import React from 'react';
import ProjectCard from '../ProjetosCard/ProjetosCard';
import projects from '../ProjectsArray/ProjectArray';




function Projetos() {
  return (
    <section className="project-cards">
      <h2 className="project-cards--title titulo">Meus Projetos</h2>
      <div className="project-cards--grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            image={project.image}
            portfolioLink={project.portfolioLink}
            projectLink={project.projectLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Projetos;
