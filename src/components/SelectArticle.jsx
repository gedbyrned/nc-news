
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleById, getCommentsById, updateArticle } from "../utils/Api";
import Comments from "./Comments";

const SelectArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  const [commentsById, setCommentsById] = useState([]);

  const [votes, setVotes] = useState(0)

  useEffect(() => {
    getArticleById(article_id).then((response) => {
        console.log(response)
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
    <>
      <article className="article-list" >
        <h2>{article.title}</h2>
        <button onClick={handleUpvoteClick}  >Upvote</button>
        <button onClick={handleDownvoteClick} >Downvote</button>
        <p>Author: {article.author}</p>
        <p>Created at: {article.created_at}</p>
        <p>Topic: {article.topic}</p>
        <p>Comment Count: {article.comment_count}</p>
        <p>Votes: {article.votes}</p>
        <img src={article.article_img_url} alt={article.title} />
        <p>{article.body}</p>
      </article>

    <Comments articleId={article_id} commentsById={commentsById} setCommentsById={setCommentsById} />
    

    </>
  );
};

export default SelectArticle;
