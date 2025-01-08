import React, { useState } from 'react';
import logo from'../../assets/icons/logo-css.svg';
import linkedin from '../../assets/icons/icon-linkedin-dark.svg';
import github from '../../assets/icons/icon-github-dark.svg';
function Header() {
  

const [menuOpen, setMenuOpen] = useState(false);

const navItems = [
    { label: 'Home', link: '/' },
    { label: 'Sobre', link: '/sobre' },
    { label: 'Projetos', link: '/projetos' },
    { label: 'Contato', link: '/contato' }
];

const toggleMenu = () => setMenuOpen(!menuOpen);

return (
    <header className='header'>
      
      <div className='header--redes'>
        <a href="https://www.linkedin.com/in/gustavo-toledo-4b3018259">
          <img src={linkedin} alt="" />
        </a>
        <a href="https://github.com/gustavo03toledo">
          <img src={github} alt="" />
        </a>
      </div>


      <div className='header--hamburger' onClick={toggleMenu}>
        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
      </div>
      
      
      <nav className={`header--nav ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item, index) => (
          <button className='header--nav--btn' key={index}>
            <a className='header--nav--btn--link' href={item.link}>{item.label}</a>
          </button>
        ))}
      </nav>
      
    </header>
  );
}

export default Header;
