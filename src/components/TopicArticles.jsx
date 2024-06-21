import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticlesByTopic } from "../utils/Api";

const TopicArticles = () => {
  const { topic_slug } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticlesByTopic(topic_slug).then((response) => {
      setArticles(response);
    });
  }, [topic_slug]);

  return (
    <div>
      <h2>Articles on {topic_slug}</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.article_id}>
            <h3>{article.title}</h3>
            <p>Author: {article.author}</p>
            <p>Created at: {article.created_at}</p>
            <p>Topic: {article.topic}</p>
            <p>Comment Count: {article.comment_count}</p>
            <p>Votes: {article.votes}</p>
            <img src={article.article_img_url} alt={article.title} />
            <p>{article.body}</p>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicArticles;
