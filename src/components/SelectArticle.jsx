import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleById, getCommentsById, updateArticle } from "../utils/Api";
import Comments from "./Comments";

const SelectArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [commentsById, setCommentsById] = useState([]);
  const [votes, setVotes] = useState(0);

  useEffect(() => {
    getArticleById(article_id).then((response) => {
      setArticle(response);
      setVotes(response.votes);
    });

    getCommentsById(article_id).then((response) => {
      setCommentsById(response);
    });
  }, [article_id]);

  const handleUpvoteClick = () => {
    setVotes((currentVotes) => currentVotes + 1);
    updateArticle(article_id, 1).then((updatedArticle) => {
      setArticle(updatedArticle);
    });
  };

  const handleDownvoteClick = () => {
    setVotes((currentVotes) => currentVotes - 1);
    updateArticle(article_id, -1).then((updatedArticle) => {
      setArticle(updatedArticle);
    });
  };

  return (
    <article className="container align-items-center mt-4 mb-4">
      <h2 className="mb-3">{article.title}</h2>
      <div className="text-centre mb-3">
        <button
          className="btn btn-success me-2"
          onClick={handleUpvoteClick}
        >
          Upvote
        </button>
        <button
          className="btn btn-danger"
          onClick={handleDownvoteClick}
        >
          Downvote
        </button>
      </div>
      <p><strong>Author:</strong> {article.author}</p>
      <p><strong>Created at:</strong> {new Date(article.created_at).toLocaleDateString()}</p>
      <p><strong>Topic:</strong> {article.topic}</p>
      <p><strong>Comment Count:</strong> {article.comment_count}</p>
      <p><strong>Votes:</strong> {votes}</p>
      <img
        src={article.article_img_url}
        alt={article.title}
        className="img-fluid mb-3"
      />
      <p className="text-dark">{article.body}</p>
      <Comments articleId={article_id} commentsById={commentsById} setCommentsById={setCommentsById} />
    </article>
  );
};

export default SelectArticle;
