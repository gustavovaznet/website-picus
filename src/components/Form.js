//FORM

//IMPORTING
import React from 'react';
import './Form.css';
import { Button } from './Button';
import logoLarge from './img/logo-large.png';

//CARDS FUNCTION
function Cards() {
  return (
    <div className='form'>
      <div className='form__container' id='home'>
        <img src={logoLarge} alt="logoLarge" className='form-title'/>
        <form method='post' action='#'>
            <input
              className='form-input'
              name='email'
              type='email'
              placeholder='Seu email'
            />
            <input
              className='form-input'
              name='password'
              type='password'
              placeholder='Sua senha'
            />
            <Button buttonStyle='btn--outline' className='button-form'>Entrar</Button>
        </form>
        </div>
      </div>
  );
}

export default Cards;
