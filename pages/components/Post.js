export default function Post({ post, onEdit, onDelete }) {
  const { id, title, body } = post;
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{body}</p>
      <button className="btn edit" onClick={onEdit}>
        &#9998;
      </button>
      <button className="btn delete" onClick={() => onDelete(id)}>
        &#10007;
      </button>
    </div>
  );
}
