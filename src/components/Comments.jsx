import { useState } from "react";
import { deleteComment } from "../utils/Api";
import NewComment from "./NewComment";

const Comments = ({ articleId, commentsById, setCommentsById }) => {
  
  const handleDeleteComment = (commentId) => {
    console.log(commentId);
    deleteComment(commentId).then(() => {
      const updatedComments = commentsById.filter((comment) => {
       return comment.comment_id !== commentId;
      });
      setCommentsById(updatedComments);
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
                <button onClick={() => handleDeleteComment(comment.comment_id)}>
                  DELETE
                </button>
              </li>
            );
          })}
        </ul>
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
