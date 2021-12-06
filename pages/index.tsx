import type { GetStaticProps, NextPage } from 'next';
import { List, ListItem } from '@material-ui/core';

type Technology = {
  id: number;
  name: string;
}

type Props = {
  technologies: Technology[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { API_URL = '' } = process.env;
  const response = await fetch(`${API_URL}/technologies`);
  const data = await response.json();

  return {
    props: {
      technologies: data,
    }
  }
}

const Home: NextPage<Props> = ({ technologies }) => {
  return (
    <List>
      {technologies.map((technology) => <ListItem key={technology.id}>{technology.name}</ListItem>)}
    </List>
  )
}

export default Home;
