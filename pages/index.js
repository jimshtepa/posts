import * as React from 'react';
import { getMessages, deleteMessage, postMessage } from './api/backend';
import Modal from 'react-modal';

export async function getStaticProps() {
  const posts = await getMessages();
  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
}

function Post({ post, onEdit }) {
  const { id, title, body } = post;
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{body}</p>
      <button className="btn edit" onClick={onEdit}>
        &#9998;
      </button>
      <button className="btn delete" onClick={() => deleteMessage(id)}>
        &#10007;
      </button>
    </div>
  );
}

function NewPost({ cancel }) {
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');

  const createPost = async (e) => {
    e.preventDefault();
    await postMessage(title, body);
    cancel();
  };

  return (
    <form className="form" onSubmit={createPost}>
      <input
        type="text"
        name="title"
        placeholder="Title of the post"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        name="body"
        placeholder="Content of the post"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <div>
        <button type="submit" className="btn">
          Create
        </button>
        <button type="button" className="btn" onClick={cancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default function Home({ posts }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const onEdit = () => {
    setIsOpen(true);
  };

  return (
    <div className="container">
      <h1>Great posts</h1>
      <div className="flex posts">
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
      <button className="btn create" onClick={() => setIsOpen(true)}>
        &#43;{' '}
      </button>
      {isOpen && (
        <Modal
          ariaHideApp={false}
          isOpen={true}
          className="modal"
          onRequestClose={() => setIsOpen(false)}
        >
          <h2>Create new post</h2>

          <div className="flex">
            <NewPost cancel={() => setIsOpen(false)} />
          </div>
        </Modal>
      )}
    </div>
  );
}
