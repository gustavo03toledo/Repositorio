import React, { useState } from 'react';

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
      
      <div className='header__redes'>
        <a href="https://www.linkedin.com/in/gustavo-toledo-4b3018259" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <div className="header__icon header__icon--linkedin"></div>
        </a>
        <a href="https://github.com/gustavo03toledo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <div className="header__icon header__icon--github"></div>
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
