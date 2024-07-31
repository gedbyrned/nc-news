import { useState } from "react";
import { addComment } from "../utils/Api";

const NewComment = ({ articleId, commentsById, setCommentsById }) => {
  const commentData = {
    username: "jessjelly",
    body: "",
  };

  const [newComment, setNewComment] = useState(commentData);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setNewComment((prevComment) => ({
      ...prevComment,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addComment(articleId, newComment)
      .then((response) => {
        setCommentsById([response.data.comment, ...commentsById]);
        setNewComment(commentData);
        setError(null);
      })
      .catch((err) => {
        setError("Error adding comment");
      });
  };

  return (
    <section className="container my-4">
      <h3 className="text-center mb-4">Add New Comment</h3>
      <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
        <div className="mb-3 w-100">
          <label htmlFor="new-comment" className="form-label">
            Comment:
          </label>
          <textarea
            value={newComment.body}
            name="body"
            placeholder="Type comment here..."
            onChange={handleChange}
            required
            className="form-control"
            rows="4"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit Comment
        </button>
        {error && <p className="text-danger mt-2">{error}</p>}
      </form>
    </section>
  );
};

export default NewComment;
