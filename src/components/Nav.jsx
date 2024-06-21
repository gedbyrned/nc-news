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
    <nav className="nav">
      <ul className="nav-ul">
        <li>User Login</li>
        <li>
          <Link className="link" to="/articles">
            All Articles
          </Link>
        </li>
        {topics.map((topic) => (
          <li key={topic.slug}>
            <Link className="link" to={`/topics/${topic.slug}`}>
                {topic.slug}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
