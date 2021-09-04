import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { Card } from '../../components/Card/Card';

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostsProps {
  posts: IPost[];
  error: string;
}

const Posts: NextPage<PostsProps> = ({ posts, error }) => {
  return (
    <div>
      All posts
      {posts.map(post => (
        <Card key={post.id} title={post.title} body={post.body} />
      ))}
      {error && (<span>{error}</span>)}
    </div>
  )
}

export default Posts;

export const getStaticProps: GetStaticProps<PostsProps> = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) throw new Error('Can`t fetch posts');
    const posts = await response.json();
    return {
      props: {
        posts,
        error: '',
      },
      revalidate: 3600,
    }
  } catch (e: any) {
    return {
      props: {
        posts: [],
        error: e.message,
      }
    }
  }
}