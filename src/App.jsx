import { useState, useEffect } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import SelectArticle from "./components/SelectArticle";
import { getArticles } from "./utils/Api";
import TopicArticles from "./components/TopicArticles";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState('created_at'); 
  const [order, setOrder] = useState('desc'); 

  useEffect(() => {
    getArticles({ sort_by: sortBy, order }).then((response) => {
      setArticles(response);
    });
  }, [sortBy, order]); 

  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/articles" element={<Articles articles={articles} setSortBy={setSortBy} setOrder={setOrder} />} />
        <Route path="/articles/:article_id" element={<SelectArticle />} />
        <Route path="/topics/:topic_slug" element={<TopicArticles />} />
      </Routes>
    </>
  );
};

export default App;
