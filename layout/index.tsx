import React, { FunctionComponent } from 'react';
import { Header } from './Header';
import { Navigation } from './Navigation';
import styles from './styles.module.css';
import { Footer } from './Footer';

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header className={styles.header} />
      <Navigation className={styles.nav} />
      <main className={styles.main}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  )
}
