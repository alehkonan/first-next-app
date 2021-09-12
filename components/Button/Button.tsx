import classNames from 'classnames';
import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import { Button } from 'react-bootstrap';
import styles from './Button.module.css';

interface MyButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  color?: 'black' | 'red' | 'yellow';
}

export const MyButton: FC<MyButtonProps> = ({ children, color }) => {
  return (
    <Button
      className={classNames({
        [styles.red]: color === 'red',
        [styles.black]: color === 'black',
        [styles.yellow]: color === 'yellow',
      })}
    >
      {children}
    </Button>
  )
}
