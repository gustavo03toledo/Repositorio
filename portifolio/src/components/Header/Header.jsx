import React, { useState } from 'react';
import logo from'../../assets/icons/logo-css.svg';
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
      <img className='header--logo' src={logo} alt="Logo" />
      {/* Ícone de hambúrguer */}
      <div className='header--hamburger' onClick={toggleMenu}>
        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
      </div>
      {/* Menu de navegação */}
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
