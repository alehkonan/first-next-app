import React, { FunctionComponent } from 'react';
import { Header } from './Header';
import { Navigation } from './Navigation';

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

export const layoutWrapper = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayout(props: T) {
    return (
      <Layout>
        <Component { ...props } />
      </Layout>
    )
  };
}
