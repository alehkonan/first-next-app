import React, { FC } from 'react';
import { Header } from './Header/Header';

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Header />
      <nav>Navigation</nav>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  )
}

export const componentWithLayout = (Component: FC) => {
  return function withLayout() {
    return (
      <Layout>
        <Component />
      </Layout>
    )
  };
}
