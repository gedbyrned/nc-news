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
    <div className="container my-4">
      <h2 className="text-center mb-4">Articles on {topic_slug}</h2>
      <div className="row">
        {articles.map((article) => (
          <div className="col-md-4 mb-4" key={article.article_id}>
            <div className="card h-100">
              <img src={article.article_img_url} alt={article.title} className="card-img-top" />
              <div className="card-body d-flex flex-column">
                <h3 className="card-title">{article.title}</h3>
                <p className="card-text">Author: {article.author}</p>
                <p className="card-text">Created at: {article.created_at}</p>
                <p className="card-text">Topic: {article.topic}</p>
                <p className="card-text">Comment Count: {article.comment_count}</p>
                <p className="card-text">Votes: {article.votes}</p>
                <p className="card-text">{article.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicArticles;
