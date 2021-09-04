import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import { Card } from '../../components/Card/Card';

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostProps {
  post: IPost | null;
  error: string;
}

const Post: NextPage<PostProps> = ({ post, error }) => {
  return (
    <div>
      {post && (
        <Card title={post.title} body={post.body}>
          <span>{post.id}</span>
        </Card>
      )}
      {error && <span>{error}</span>}
    </div>
  )
}

export default Post;

export const getStaticProps: GetServerSideProps<PostProps> = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    }
  }
  const { id } = params;
  console.log(params);
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!response.ok) {
    return {
      redirect: {
        destination: '/posts',
        permanent: true,
      }
    }
  }
  const post = await response.json();
  console.log({ post });
    return {
      props: {
        post,
        error: '',
      }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
  const posts = await response.json() as IPost[];
  const paths = posts.map(post => ({ params: { id: `${post.id}` } }));

  return {
    paths,
    fallback: true,
  }
}
