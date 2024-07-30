import { useState } from "react";
import { Link } from "react-router-dom";

const Articles = ({ articles, setSortBy, setOrder }) => {
  const [sortCriteria, setSortCriteria] = useState('created_at');
  const [sortOrder, setSortOrder] = useState('desc');

  const handleSortChange = (e) => {
    const newSortCriteria = e.target.value;
    setSortCriteria(newSortCriteria);
    setSortBy(newSortCriteria);
  };

  const handleOrderChange = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
    setOrder(newSortOrder);
  };

  return (
    <main>
      <div>
        <select onChange={handleSortChange} value={sortCriteria}>
          <option value="created_at">Sort by date</option>
          <option value="comment_count">Sort by comment count</option>
          <option value="votes">Sort by votes</option>
        </select>
        <button onClick={handleOrderChange}>
          {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
        </button>
      </div>
      <article className="article-list">
        <h2>All Articles</h2>
        <ul>
          {articles.map((article) => (
            <li className="article-list" key={article.article_id}>
              <img src={article.article_img_url} alt={article.title} />
              <br />
              <Link className="article-title" to={`/articles/${article.article_id}`}>
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
};

export default Articles;
