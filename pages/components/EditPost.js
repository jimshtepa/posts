import React from 'react';
import Modal from 'react-modal';

export default function EditPost({ onSavePost, onCancel, post }) {
  const [title, setTitle] = React.useState(post.title);
  const [body, setBody] = React.useState(post.body);

  const submitForm = (e) => {
    e.preventDefault();
    onSavePost({ id: post.id, title, body });
  };

  return (
    <Modal
      ariaHideApp={false}
      isOpen={true}
      className="modal"
      onRequestClose={onCancel}
    >
      <h2>Edit post</h2>
      <form className="form" onSubmit={submitForm}>
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
            Save
          </button>
          <button type="button" className="btn" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
}
