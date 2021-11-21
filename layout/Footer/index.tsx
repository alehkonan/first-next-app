import React, { DetailedHTMLProps, FunctionComponent, HTMLAttributes } from 'react';
import { Typography } from '@material-ui/core';
import cn from 'classnames';
import styles from './styles.module.css';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Footer: FunctionComponent<Props> = ({ className }) => {
  return (
    <footer className={cn(className, styles.footer)}>
      <Typography
        fontFamily="inherit"
        variant="h5"
        noWrap
      >
        Footer
      </Typography>
    </footer>
  )
}
