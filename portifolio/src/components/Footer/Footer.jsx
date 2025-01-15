import React from 'react'
import linkedin from '../../assets/icons/icon-linkedin-dark.svg';
import github from '../../assets/icons/icon-github-dark.svg';

function Footer() {
  return (
    <>
        <footer className='footer'>
            <div className="footer--redes">
                <a href="https://www.linkedin.com/in/gustavo-toledo-4b3018259">
                    <img src={linkedin} alt="" />
                </a>
                <a href="https://github.com/gustavo03toledo">
                    <img src={github} alt="" />
                </a>
            </div>
            <div className="footer--contatos">
                <p>E-MAIL: guhh03odelot@gmail.com</p>
            </div>
            <p>©2025 Gustavo Toledo</p>
        </footer>
    </>
  )
}

export default Footer