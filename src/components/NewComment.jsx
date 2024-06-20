import { useState } from "react";
import { addComment } from "../utils/Api";

const NewComment = ({ articleId, commentsById, setCommentsById }) => {
    
    const commentData = {
        username: "cooljmessy", 
        body: "",
      }

  const [newComment, setNewComment] = useState(commentData);

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
      })

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
      </form>
    </section>
  );
};

export default NewComment;
