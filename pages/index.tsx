import type { GetStaticProps, NextPage } from 'next';
import { getSession, signIn, signOut, useSession } from 'next-auth/client';
import { useEffect } from 'react';
import { layoutWrapper } from '@layout';

interface HomeProps extends Record<string, unknown> {
  text?: string;
}

const Home: NextPage<HomeProps> = ({ text }) => {
  const [session, loading] = useSession();

  return (
    <div>
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

export default layoutWrapper(Home);

export const getStaticProps: GetStaticProps<HomeProps> = () => {
  return {
    props: {
      text: 'Some changes has been done',
    }
  }
}
