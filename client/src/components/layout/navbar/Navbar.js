import React from 'react';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper">
          <a href="#!" class={`brand-logo ${styles.Logo}`}>
            TweetGulls
          </a>
          <ul class="left hide-on-med-and-down">
            <li>
              <a href="/">Tweet Feed</a>
            </li>
          </ul>
          <ul class="right hide-on-med-and-down">
            <li>
              <a href="#">Players</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
