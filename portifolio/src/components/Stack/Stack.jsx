import React from 'react';
import bootstrap from '../../assets/icons/logo-bootstrap.svg';
import css from '../../assets/icons/logo-css.svg';
import git from '../../assets/icons/logo-git.svg';
import html from '../../assets/icons/logo-html.svg';
import js from '../../assets/icons/logo-js.svg';
import mysql from '../../assets/icons/logo-mysql.svg';
import nodejs from '../../assets/icons/logo-nodejs.svg';
import vscode from '../../assets/icons/logo-vscode.svg';
import sass from '../../assets/icons/logo-sass.svg';
import react from '../../assets/icons/logo-react.svg';
import github from '../../assets/icons/logo-github.svg';
import mongodb from '../../assets/icons/icon-mongodb.svg';

const logoStack = [
  { src: bootstrap, alt: 'Bootstrap' },
  { src: css, alt: 'CSS' },
  { src: git, alt: 'Git' },
  { src: html, alt: 'HTML' },
  { src: js, alt: 'JavaScript' },
  { src: mysql, alt: 'MySQL' },
  { src: nodejs, alt: 'Node.js' },
  { src: vscode, alt: 'VSCode' },
  { src: sass, alt: 'Sass' },
  { src: react, alt: 'React' },
  { src: github, alt: 'Github' },
  { src: mongodb, alt: 'MongoDB' },
];

function Stack({ className }) {
  return (
    <>
      <section className={`stack ${className || ''}`}>
        <h2 className="stack--titulo titulo">Habilidades</h2>
        <p className="stack--texto texto">
          Confira algumas das habilidades que estou desenvolvendo e aperfeiçoando continuamente.
        </p>

        <div className="stack--logos">
          {logoStack.map((logo, index) => (
            <div key={index} className="stack--logos--item">
              <img src={logo.src} alt={logo.alt} className="stack--logos--logo" />
              
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Stack;
