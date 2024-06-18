import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleById } from "../utils/Api";

const SelectArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticleById(article_id).then((response) => {
      setArticle(response);
    });
  }, [article_id]);



  return (
    <section>
      <h2>{article.title}</h2>
      <p>Author: {article.author}</p>
      <p>Created at: {article.created_at}</p>
      <p>Topic: {article.topic}</p>
      <p>Comment Count: {article.comment_count}</p>
      <p>Votes: {article.votes}</p>
      <img src={article.article_img_url} alt={article.title} />
      <p>{article.body}</p>
    </section>
  );
};

export default SelectArticle;
