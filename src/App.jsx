import { useState, useEffect } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SelectArticle from "./components/SelectArticle";
import { getArticles } from "./utils/Api";
import TopicArticles from "./components/TopicArticles";

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((response) => {
      console.log(response)
      setArticles(response);
    });
  }, []);

  return (
    <>
      <div>
        <Header />
        <Nav />
        <Routes>
          
          <Route path="/articles" element={<Articles articles={articles} />} />
          <Route
           path="/articles/:article_id"
           element={<SelectArticle />}
          />
          <Route path="/topics/:topic_slug" element={<TopicArticles />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
