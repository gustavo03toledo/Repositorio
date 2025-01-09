import React from 'react';
import githubCard from '../../assets/icons/icon-github-card.svg';
import linkCard from '../../assets/icons/icon-link-card.svg';

function ProjetoCard({ name, description, image, portfolioLink, projectLink }) {
  return (
    <div className="project-card">
      <img src={image} alt={name} className="project-card--image" />
      
      <h3 className="project-card--name titulo">{name}</h3>
      <p className="project-card--description texto">{description}</p>
      <div className="project-card--links">
        <a
          href={portfolioLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card--links--link"
        >
            <img src={githubCard} alt="" />
          Repositório
        </a>
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card--links--link"
        >
            <img src={linkCard} alt="" />

          Projeto
        </a>
      </div>
    </div>
  );
}

export default ProjetoCard;
