import type { GetStaticProps, NextPage } from 'next'
import { FunctionComponent } from 'react';
import { componentWithLayout } from '../layout/Layout'
import styles from '../styles/Home.module.css'

interface HomeProps extends Record<string, unknown> {
  text?: string;
}

const Home: FunctionComponent<HomeProps> = ({ text }) => {
  console.log(text);

  return (
    <div className={styles.main}>
      <h1>Main page</h1>
      {text !== undefined && <p>{text}</p>}
    </div>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = () => {
  return {
    props: { text: '' }
  }
}

export default componentWithLayout(Home);
