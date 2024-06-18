import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const Articles = ({ articles }) => {
 
  return (
    <section className="article-list">
      <h2>All Articles</h2>

      <ul>
        {articles.map((article) => {
          return (
            <li className="article" key={article.article_id}>
              <Link className="article-title" to={`/articles/${article.article_id}`}>
                {article.title}
              </Link>
              <img src={article.article_img_url} alt={article.title} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Articles;

