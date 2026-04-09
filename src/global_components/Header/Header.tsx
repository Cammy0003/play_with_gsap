import styles from './Header.module.css';
import React from 'react'
import { NAV_LINKS } from '../../routes/paths'
import logoStyles from '../../styles/logo.module.css';

const Header: React.FC = () => {

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo / Brand */}
        <div className={logoStyles.logo}>
          <span className={logoStyles.logoText}>PLAYGROUND</span>
        </div>

        {/* Navigation */}
        <nav>
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a href={link.path} className={styles.navLink}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button */}
        <button className={styles.button}>CONNECT</button>
      </div>
    </header>
  );
};

export default Header;
