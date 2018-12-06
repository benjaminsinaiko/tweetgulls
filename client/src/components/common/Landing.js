import React from 'react';

import styles from './Landing.module.css';

const Landing = () => {
  return (
    <div className={styles.LogoCenter}>
      <div className={`row `}>
        <div className={`col s12 m4 14`}>
          <div className={styles.Logo}>
            <h1>TweetGulls</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
