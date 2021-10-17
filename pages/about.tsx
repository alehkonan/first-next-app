import { NextPage } from 'next';
import React from 'react';
import { layoutWrapper } from '@layout';

const About: NextPage = () => {
  return (
    <>
      <h3>About page</h3>
      <p>This is the page about what this site about</p>
    </>
  )
}

export default layoutWrapper(About);
