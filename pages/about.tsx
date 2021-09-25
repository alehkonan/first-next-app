import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { componentWithLayout } from '../layout/Layout';

const About: NextPage = () => {
  const { push } = useRouter();

  return (
    <>
      <h3>About page</h3>
      <p>This is the page about what this site about</p>
      <Link href="/posts">
        <a>Go to posts</a>
      </Link>
    </>
  )
}

export default componentWithLayout(About);
