import React from 'react';
import styles from './Hero.module.css';
import PropTypes from 'prop-types';

export default function Hero({ src, alt, title, description, placeTitle, placeDescription }) {
  return (
    <header className={styles.hero}>
      <img className={styles.image} src={src} alt={alt} />
      <div className={styles.content}>
        <h1 style={{ placeSelf: placeTitle }}>{title}</h1>
        <p style={{ placeSelf: placeDescription }}>{description}</p>
      </div>
    </header>
  );
}

Hero.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  placeTitle: PropTypes.string,
  placeDescription: PropTypes.string,
};
