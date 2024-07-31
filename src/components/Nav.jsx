import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../utils/Api";

const Nav = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((response) => {
      setTopics(response);
    });
  }, []);

  return (
    <nav className="bg-white p-3 mb-0">
      <ul className="container d-flex justify-content-start list-unstyled p-0 m-0">
        <li className="nav-item">
          <Link className="bg-gradient-danger text-danger" to="/articles">
            All Articles
          </Link>
        </li>
        {topics.map((topic) => (
          <li key={topic.slug} className="nav-item">
            <Link className="text-danger" to={`/topics/${topic.slug}`}>
              {topic.slug}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
