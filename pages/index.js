import { getMessages, deleteMessage, logSomething } from './api/backend';

export async function getStaticProps() {
  const posts = await getMessages();
  return {
    props: {
      posts,
    },
  };
}

function Post({ post }) {
  const { id, title, body } = post;
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{body}</p>
      <button className="btn edit">&#9998;</button>
      <button className="btn delete" onClick={() => deleteMessage(id)}>
        &#10007;
      </button>
    </div>
  );
}

export default function Home({ posts }) {
  return (
    <div className="container">
      <h1>Great posts</h1>
      <div className="posts container">
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
