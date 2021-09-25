import React, { FunctionComponent } from 'react';
import Link from 'next/link';

export const Navigation: FunctionComponent = () => {
  return (
    <nav>
      <ul>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </ul>
    </nav>
  )
}
