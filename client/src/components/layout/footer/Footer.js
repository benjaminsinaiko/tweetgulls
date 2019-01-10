import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

class Footer extends Component {
  render() {
    return (
      <footer className={`section page-footer black ${styles.FixedFooter}`}>
        <Link
          to="/team"
          className={`waves-effect waves-light btn black ${
            styles.FooterButton
          }`}
        >
          Team
        </Link>
        <Link
          to="/players"
          className={`waves-effect waves-light btn black ${
            styles.FooterButton
          }`}
        >
          Players
        </Link>
      </footer>
    );
  }
}

export default Footer;
