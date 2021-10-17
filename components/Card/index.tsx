import React, { FunctionComponent } from 'react';
import styles from './Card.module.css';

interface CardProps {
  title: string;
  body: string;
}

export const Card: FunctionComponent<CardProps> = ({ children, title, body }) => {
  return (
    <div className={styles.card}>
      <h4 className={styles.header}>{title}</h4>
      <p className={styles.body}>{body}</p>
      {children}
    </div>
  )
}
