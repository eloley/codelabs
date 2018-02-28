import React, { Component } from 'react';

import flask from '../assets/images/icons/icon_flask.png';

class Splash extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="splash">
        <div className="splash__container container">
          <img className="splash__icon" src={flask} alt="Code Labs" />
          <div className="splash__text">
            <h2 className="splash__title">
              Bienvenue sur Eleven Code Labs
            </h2>
            <p className="splash__description">
              Cette plateforme est votre nouvelle ressource de tutoriels
              orientés développement web et mobile. Suivez à votre rythme
              des exercices complets, qui couvrent des sujets allant du
              développement de petites applications, à des cas pratiques
              vous faisant découvrir un nouvel outil...
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
