import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
   <footer className="footer">
    <div className="footer__container container">
        <h1 className="footer__title">Saqlain</h1>

        <ul className="footer__list">
            <li>
                <a href="#about" className="footer__link">About</a>
            </li>

            <li>
                <a href="#portfolio" className="footer__link">Projects</a>
            </li>

            <li>
                <a href="#testomonials" className="footer__link">Testomonials</a>
            </li>
        </ul>

        <div className="footer__social">
        <a href="https://github.com/saqlain767" className="footer__socail-link" target="_blank"><i class="uil uil-github"></i></a>
            <a href="https://twitter.com/SAQLAIN17659109" className="footer__socail-link" target="_blank"><i class="uil uil-twitter"></i></a>
            <a href="https://web.telegram.org/k/#@saqlain127" className="footer__socail-link" target="_blank"><i class="uil uil-telegram"></i></a>
        </div>
       <span className='footer__copy'>
       Copyright &#169; 2023 - Mohammed Saqlain | All rigths reserved.
       </span>
    </div>
   </footer>
  )
}

export default Footer
