import { useState } from "react";
import { deleteComment } from "../utils/Api";
import NewComment from "./NewComment";

const Comments = ({ articleId, commentsById, setCommentsById }) => {
  const [error, setError] = useState(null);

  const handleDeleteComment = (commentId) => {
    deleteComment(commentId)
      .then(() => {
        const updatedComments = commentsById.filter(
          (comment) => comment.comment_id !== commentId
        );
        setCommentsById(updatedComments);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <section className="container my-4">
      <h3 className="text-center mb-4">Comments</h3>
      {error && <p className="text-danger text-center">{error}</p>}
      <ul className="list-unstyled">
        {Object.values(commentsById).map((comment) => (
          <li className="mb-3 border p-3 rounded" key={comment.comment_id}>
            <div className="d-flex flex-column align-items-start">
              <p className="mb-1"><strong>By:</strong> {comment.author}</p>
              <p className="mb-1"><strong>Created:</strong> {new Date(comment.created_at).toLocaleString()}</p>
              <p className="mb-1"><strong>Votes:</strong> {comment.votes}</p>
              <p className="mb-2">{comment.body}</p>
              {comment.author === "jessjelly" && (
                <button
                  onClick={() => handleDeleteComment(comment.comment_id)}
                  className="btn btn-danger size"
                  
                >
                  DELETE
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
      <NewComment
        articleId={articleId}
        commentsById={commentsById}
        setCommentsById={setCommentsById}
      />
    </section>
  );
};

export default Comments;
