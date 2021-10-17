import type { GetStaticProps, NextPage } from 'next';
import { layoutWrapper } from '@layout';
import { Typography } from '@material-ui/core';

interface HomeProps extends Record<string, unknown> {
  text?: string;
}

const Home: NextPage<HomeProps> = ({ text }) => {
  return (
    <div>
      <Typography variant="h2" component="h2">Main</Typography>
      {text !== undefined && <p>{text}</p>}
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
