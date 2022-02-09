//FOOTER

//IMPORTING
import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import logo from './img/logo.png';

//FOOTER FUNCTION
function Footer() {
  return (
    <div className='footer-container' id='footer'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          NEWSLETTER
        </p>
        <p className='footer-subscription-text'>
          Inscreva-se em nossa newsletter e receba notícias e informações exclusivas sobre nós
        </p>
        <div className='input-areas'>
          <form method='post' action='#'>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Seu email'
            />
            <Button buttonStyle='btn--outline'>Inscrever</Button>
          </form>
        </div>
      </section>
      {/* FOOTER LINKS */}
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Navegação</h2>
            <a href='#home'>Home</a>
            <a href='#services'>Serviços</a>
            <a href='#footer'>Contato</a>
          </div>
          <div class='footer-link-items'>
            <h2>Serviços</h2>
            <Link to='/'>Desenvolvimento</Link>
            <Link to='/'>Cloud Computing</Link>
            <Link to='/'>Infraestrutura de TI</Link>
            <Link to='/'>Cybesecurity</Link>
            <Link to='/'>Suporte Técnico</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>SAC</h2>
            <Link to='/'>Dúvidas</Link>
            <Link to='/'>Reclamações</Link>
            <Link to='/'>Ouvidoria</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Redes Sociais</h2>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Snapchat</Link>
            <Link to='/'>Twitter</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Linkedin</Link>
          </div>
        </div>
      </div>
      {/* SOCIAL MEDIA SECTION - LINKS */}
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src={logo} alt="logo"/>
            </Link>
          </div>
          <small class='website-rights'>PICUS GROUP © 2021 Todos os direitos reservados</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link snapchat'
              to='/'
              target='_blank'
              aria-label='Snapchat'
            >
              <i class='fab fa-snapchat' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link linkedin'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
