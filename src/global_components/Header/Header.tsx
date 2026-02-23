import styles from './Header.module.css';
import React from 'react'
import { PATHS } from '../../routes/paths'
import logoStyles from '../../styles/logo.module.css';

const Header: React.FC = () => {
  const navLinks = [
    { name: 'Home', href: PATHS.HOME },
    { name: 'The-Exploding-Menu', href: PATHS.EXPLODING_MENU },
    { name: 'Research', href: '#' },
    { name: 'About', href: '#' },
  ] as const;

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
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className={styles.navLink}>
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
