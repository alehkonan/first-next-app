import { NextPage } from 'next';
import React from 'react';
import { componentWithLayout } from '../layout/Layout';

const ServerErrorPage: NextPage = () => {
  return (
    <>
      <h1>Something went wrong on the server, try again later</h1>
    </>
  )
}

export default componentWithLayout(ServerErrorPage);
