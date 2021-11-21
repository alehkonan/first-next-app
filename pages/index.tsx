import type { GetStaticProps, NextPage } from 'next';
import { Typography } from '@material-ui/core';
type Props = {
  text?: string;
}

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: {
      text: 'Some changes has been done',
    }
  }
}

const Home: NextPage<Props> = ({ text }) => {
  return (
    <div>
      <Typography variant="h2" component="h2">Main</Typography>
      {text !== undefined && <p>{text}</p>}
    </div>
  )
}

export default Home;
