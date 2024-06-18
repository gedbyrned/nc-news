import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-ul">
        <li>User Login</li>
        <li>
          <Link className="link" to="/articles">
            All Articles
          </Link>
        </li>
        <li>Topic 1</li>
        <li>Topic 2</li>
        <li>Topic 3</li>
      </ul>
    </nav>
  );
};

export default Nav;

