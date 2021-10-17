import React, { DetailedHTMLProps, FunctionComponent, HTMLAttributes } from 'react';
import Link from 'next/link';

interface NavProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Navigation: FunctionComponent<NavProps> = ({ className }) => {
  return (
    <nav className={className}>
      <ul>
        <li>
          <Link href="/">Home</Link>
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
