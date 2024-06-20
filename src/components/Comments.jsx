import NewComment from "./NewComment";
const Comments = ({ articleId, commentsById, setCommentsById } ) => {

 
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
              </li>
            );
          })}
        </ul>
          <NewComment articleId={articleId} commentsById={commentsById} setCommentsById={setCommentsById}/> 
      </section>
    </>
    )
}


export default Comments;
