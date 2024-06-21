import { useState } from "react";
import { deleteComment } from "../utils/Api";
import NewComment from "./NewComment";

const Comments = ({ articleId, commentsById, setCommentsById }) => {
  const [error, setError] = useState(null);

  const handleDeleteComment = (commentId) => {
    deleteComment(commentId)
      .then(() => {
        const updatedComments = commentsById.filter(
          (comment) => {
            return comment.comment_id !== commentId
          });
        setCommentsById(updatedComments);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <>
      <section>
        <ul className="comment-ul">
          {" "}
          Comments
          {Object.values(commentsById).map((comment) => {
            return (
              <li className="comment-li" key={comment.comment_id}>
                By: {comment.author}
                <br />
                {comment.body}
                <br />
                Created: {comment.created_at}
                <br />
                Votes: {comment.votes}
                <br />
                <button
                  onClick={() => {
                    if (comment.author === "jessjelly") {
                      handleDeleteComment(comment.comment_id);
                    }
                  }}
                >
                  DELETE
                </button>
              </li>
            );
          })}
        </ul>
        {error && <p>{error}</p>}
        <NewComment
          articleId={articleId}
          commentsById={commentsById}
          setCommentsById={setCommentsById}
        />
      </section>
    </>
  );
};

export default Comments;
