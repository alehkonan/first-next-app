import React, { FunctionComponent, Props } from 'react';
import { Header } from './Header/Header';
import { Navigation } from './Navigation/Navigation';

const Layout: FunctionComponent = ({ children }) => {
  return (
    <div>
      <Header />
      <Navigation />
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  )
}

export const componentWithLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayout(props: T) {
    return (
      <Layout>
        <Component { ...props } />
      </Layout>
    )
  };
}
