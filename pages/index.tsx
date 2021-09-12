import type { NextPage } from 'next'
import { componentWithLayout } from '../layout/Layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.main}>
      <h1>Main page</h1>
    </div>
  )
}

export default componentWithLayout(Home);
