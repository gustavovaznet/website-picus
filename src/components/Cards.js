//CARDS

//IMPORTING
import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

//CARDS FUNCTION
function Cards() {
  return (
    <div className='cards' id='services'>
      <h1 className='cards-title'>Nossos serviços</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {/* CARDS */}
            <CardItem
              src='images/img-1.jpg'
              text='Desenvolvimento de aplicações de ponta a ponta.'
              label='Desenvolvimento de Software'
              path='/'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Infraestrutura própria de cloud computing.'
              label='Cloud Computing'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Infraestrutura e tecnologia de ponta.'
              label='Infraestrutura de TI'
              path='/'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Segurança da informação é com a gente.'
              label='Cybersecurity'
              path='/'
            />
            <CardItem
              src='images/img-5.jpg'
              text='Suporte técnico especializado 24/7.'
              label='Suporte Técnico'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
