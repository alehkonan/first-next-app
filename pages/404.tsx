import { NextPage } from 'next';
import React from 'react';
import { layoutWrapper } from '@layout';

const NotFoundPage: NextPage = () => {
  return (
    <>
      <h1>Page not found, try another page</h1>
    </>
  )
}

export default layoutWrapper(NotFoundPage);
