import React, { FunctionComponent } from 'react';
import { Header } from './Header';
import { Navigation } from './Navigation';
import styles from './layout.module.css';
import { Footer } from './Footer';

const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header className={styles.header} />
      <Navigation className={styles.nav} />
      <main className={styles.main}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  )
}

export const layoutWrapper = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayout(props: T) {
    return (
      <Layout>
        <Component { ...props } />
      </Layout>
    )
  };
}
