import { useState, useEffect } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Articles from './components/Articles'
import { getArticles } from './utils/Api'
import './App.css'

function App() {
  const [articles, setArticles] = useState([]);

   useEffect(() => {
  getArticles().then((response) => {
    setArticles(response);
  })
  
   }, [])


  return (
   <>
     <Header />
     <Nav />
      <Articles articles={articles}/>
   </>
  )
}

export default App
