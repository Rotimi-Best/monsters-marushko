import React from 'react';
import ButtonNext from '../ButtonNext/ButtonNext';
import './StartPage.css';

const StartPage = () => {
  return (
    <div className="container">
      <img className="top-logo" src="img/start_logo.png" alt=""/>
      <img className="all-monsters" src="img/page_1_monsters.png" alt=""/>
      <ButtonNext text="Start"/>
    </div>
  );
};

export default StartPage;
