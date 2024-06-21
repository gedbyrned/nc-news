import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const Articles = ({ articles }) => {
 
  return (
    <main>
    <button className="dropdown-button">Sort by dropdown...</button>
  
    <p>sort by date </p>
    <p>sort by comment count</p>
    <p>sort by votes</p>
    <p>flip the order between ascending and descending </p>

    <button>Ascending/Descending</button>
    <br />
    <br />



    <article className="article-list">
      <h2>All Articles</h2>
    
      <ul>
        {articles.map((article) => {
          return (
            <li className="article-list" key={article.article_id}>
              <img src={article.article_img_url} alt={article.title} />
              <br></br>
              <Link className="article-title" to={`/articles/${article.article_id}`}>
                {article.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </article>

    </main>
  );
};

export default Articles;

