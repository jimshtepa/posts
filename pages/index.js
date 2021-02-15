import * as React from 'react';
import { getPosts, deletePost, postPost, updatePost } from './api/backend';
import Modal from 'react-modal';

import NewPost from './components/NewPost';
import Post from './components/Post';
import EditPost from './components/EditPost';

export async function getStaticProps() {
  const posts = await getPosts();
  // console.log(posts);
  return {
    props: {
      initialPosts: posts,
    },
    revalidate: 1,
  };
}

export default function Home({ initialPosts }) {
  const [posts, setPosts] = React.useState(initialPosts);
  const [isNewPostOpen, setIsNewPostOpen] = React.useState(false);
  const [currentPost, setCurrentPost] = React.useState(null);

  const addPost = async (title, body) => {
    postPost(title, body)
      .then((res) => setPosts([...posts, ...res]))
      .then(() => setIsNewPostOpen(false));
  };

  const removePost = async (id) => {
    deletePost(id).then(() =>
      setPosts((posts) => posts.filter((p) => p.id !== id))
    );
  };

  const savePost = async ({ id, title, body }) => {
    updatePost({ id, title, body })
      .then((res) => setPosts(posts.map((p) => (p.id !== id ? p : res[0]))))
      .then(() => setCurrentPost(null));
  };

  const renderPosts = posts.map((p) => (
    <Post
      key={p.id}
      post={p}
      onDelete={removePost}
      onEdit={() => setCurrentPost(p)}
    />
  ));

  return (
    <div className="container">
      <h1>Great posts</h1>

      {isNewPostOpen && (
        <NewPost
          onCreatePost={addPost}
          onCancel={() => setIsNewPostOpen(false)}
        />
      )}
      {currentPost && (
        <EditPost
          post={currentPost}
          onSavePost={savePost}
          onCancel={() => setCurrentPost(null)}
        />
      )}

      <div className="flex posts">{renderPosts}</div>
      <button className="btn create" onClick={() => setIsNewPostOpen(true)}>
        &#43;{' '}
      </button>
    </div>
  );
}
