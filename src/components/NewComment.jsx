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
    <section className="new-comment">
      <h3>Add new comment</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="new-comment">
          Comment:
          <input
            value={newComment.body}
            type="text"
            name="body"
            placeholder="Type comment here..."
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Submit Comment</button>
        {error && <p>{error}</p>}
      </form>
    </section>
  );
};

export default NewComment;
