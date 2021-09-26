import { NextPage } from 'next';
import React from 'react';
import { componentWithLayout } from '../layout/Layout';

const NotFoundPage: NextPage = () => {
  return (
    <>
      <h1>Page not found, try another page</h1>
    </>
  )
}

export default componentWithLayout(NotFoundPage);
