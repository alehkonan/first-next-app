import React, { FunctionComponent } from 'react';
import Link from 'next/link';

export const Navigation: FunctionComponent = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Hello</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}
