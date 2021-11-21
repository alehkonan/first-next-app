import React, { DetailedHTMLProps, FunctionComponent, HTMLAttributes } from 'react';
import Link from 'next/link';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Navigation: FunctionComponent<Props> = ({ className }) => {
  return (
    <nav className={className}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </nav>
  )
}
