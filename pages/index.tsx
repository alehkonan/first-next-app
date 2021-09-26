import type { GetStaticProps, NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/client';
import { componentWithLayout } from '../layout/Layout'
import styles from '../styles/Home.module.css'

interface HomeProps extends Record<string, unknown> {
  text?: string;
}

const Home: NextPage<HomeProps> = ({ text }) => {
  const [session, loading] = useSession();

  return (
    <div className={styles.main}>
      <h1>Main page</h1>
      {text !== undefined && <p>{text}</p>}
      {session ? (
        <button onClick={() => signOut()}>Sign out</button>
      ) : (
        <button onClick={() => signIn()}>Sign in</button>
      )}
    </div>
  )
}

export default componentWithLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = () => {
  return {
    props: {
      text: 'Some changes has been done',
    }
  }
}
