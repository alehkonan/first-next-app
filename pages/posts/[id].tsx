import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React, { useState } from 'react';
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
  const [posts, setPosts] = useState<IPost[]>([]);
  const handleClick = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json() as IPost[];
    setPosts(data);
  };

  return (
    <div>
      {post && (
        <Card title={post.title} body={post.body}>
          <span>{post.id}</span>
        </Card>
      )}
      {error && <span>{error}</span>}
      <button
        onClick={handleClick}
      >
        Load more posts
      </button>
      {posts.map(p => <Card key={p.id} title={p.title} body={p.body} />)}
    </div>
  )
}

export default Post;

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

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    }
  }
  const { id } = params;
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
    return {
      props: {
        post,
        error: '',
      }
    }
}
