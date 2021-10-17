import { NextPage } from 'next';
import React from 'react';
import { layoutWrapper } from '@layout';

const ServerErrorPage: NextPage = () => {
  return (
    <>
      <h1>Something went wrong on the server, try again later</h1>
    </>
  )
}

export default layoutWrapper(ServerErrorPage);
