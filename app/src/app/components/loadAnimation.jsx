import React from 'react';
import styles from './animation.module.css'; // Uvezite CSS Module
import { useEffect } from 'react';

const LoadingAnimation = ({ onAnimationFinish }) => {
  useEffect(() => {
    // Pozovite onAnimationFinish kada se animacija završi
    const timer = setTimeout(() => {
      onAnimationFinish();
    }, 3000); // Prilagodite ovo vreme prema trajanju vaše animacije

    return () => clearTimeout(timer); // Očistite timer kada se komponenta unmountuje
  }, [onAnimationFinish]);
  return (
    <div id={styles.animationBody}>
      <section className={styles.container}>
        <div className={styles.div}>
          <div>
            <span className={`${styles.one} ${styles.h6} font-black`}></span>
            <span className={`${styles.two} ${styles.h3}`}></span>
          </div>
        </div>
        <span className={styles.m}>M</span>
        <div className={styles.div}>
          <div>
            <span className={`${styles.one} ${styles.h1}`}></span>
            <span className={`${styles.two} ${styles.h4}`}></span>
          </div>
        </div>
        <div className={styles.div}>
          <div>
            <span className={`${styles.one} ${styles.h5}`}></span>
            <span className={`${styles.two} ${styles.h2}`}></span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoadingAnimation;
