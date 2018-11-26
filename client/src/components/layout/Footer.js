import React, { Component } from 'react';

import styles from './Footer.module.css';

class Footer extends Component {
  render() {
    return (
      <footer className={`section page-footer black ${styles.FixedFooter}`}>
        <a
          className={`waves-effect waves-light btn black ${
            styles.FooterButton
          }`}
        >
          BHAFC
        </a>
        <a
          className={`waves-effect waves-light btn black ${
            styles.FooterButton
          }`}
        >
          Players
        </a>
      </footer>
    );
  }
}

export default Footer;
