import { NextPage } from 'next';
import React from 'react';
import { layoutWrapper } from '@layout';
import { Typography } from '@material-ui/core';

const About: NextPage = () => {
  return (
    <>
      <Typography variant="h2">About page</Typography>
      <p>This is the page about what this site about</p>
    </>
  )
}

export default layoutWrapper(About);
