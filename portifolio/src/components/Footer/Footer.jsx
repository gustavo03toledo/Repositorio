import React from 'react'

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer__container'>
            <div className="footer__redes">
                <a href="https://www.linkedin.com/in/gustavo-toledo-4b3018259" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <div className="footer__icon footer__icon--linkedin"></div>
                </a>
                <a href="https://github.com/gustavo03toledo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <div className="footer__icon footer__icon--github"></div>
                </a>
            </div>
            <div className="footer__info">
                <p>
                    <a href="mailto:guhh03odelot@gmail.com">guhh03odelot@gmail.com</a>
                </p>
                <p>©2025 Gustavo Toledo</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer