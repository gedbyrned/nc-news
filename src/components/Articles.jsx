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
    <main className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center">
          <select 
            onChange={handleSortChange} 
            value={sortCriteria} 
            className="form-select me-2"
          >
            <option value="created_at">Sort by date</option>
            <option value="comment_count">Sort by comment count</option>
            <option value="votes">Sort by votes</option>
          </select>
          <button 
            onClick={handleOrderChange} 
            className="btn btn-danger"
          >
            {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
          </button>
        </div>
      </div>
      <article className="article-list">
        <h2 className="mb-4">All Articles</h2>
        <ul className="list-unstyled">
          {articles.map((article) => (
            <li className="d-flex align-items-center mb-3" key={article.article_id}>
              <img 
                src={article.article_img_url} 
                alt={article.title} 
                className="img-thumbnail me-3"
                style={{ width: '150px', height: 'auto' }}
              />
              <div>
                <Link 
                  className="h5 text-decoration-none text-dark" 
                  to={`/articles/${article.article_id}`}
                >
                  {article.title}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
};

export default Articles;
