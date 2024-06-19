import { useState } from "react";
import { addComment } from "../utils/Api";
import { useParams } from "react-router-dom";


const defaultNewComment = {
    votes: 0,
    created_at: "",
    author: "",
    body: ""
}

const NewComment = ({ commentsById, setCommentsById }) => {
const [newComment, setNewComment] = useState(defaultNewComment);
const { article_id } = useParams();

const handleChange = (event) => {

    setNewComment((newComment) => ({
      ...newComment,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCommentsById([{...newComment}, ...commentsById])



    addComment(newComment);
    setNewComment(defaultNewComment);
  };




return ( 
 <>
 <section className="new-comment">
    <h3>Add new comment</h3>
    <form className="comment-form" onSubmit={handleSubmit}>
    <label htmlFor="new-comment">
        Comment: 
        <input
        value={newComment.body}
        type="text"
        name="body"
        placeholder="type comment here..."
        onChange={handleChange}
        required
        />
    </label>

    <br />
    <button>Submit Comment</button>
    </form>
 </section>
 
 </>
)}


export default NewComment;