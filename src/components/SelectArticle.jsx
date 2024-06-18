import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleById, getCommentsById } from "../utils/Api";

const SelectArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [commentsById, setCommentsById] = useState({});

  useEffect(() => {
    getArticleById(article_id).then((response) => {
      setArticle(response);
      
    });
    getCommentsById(article_id).then((response) => {
        setCommentsById(response)
      });
  }, [article_id]);

// console.log(article)
//  console.log(commentsById)

//  Object.values(commentsById).map((comment) => {

//     console.log(comment.body)
//  })


  return (
    <section>
      <h2>{article.title}</h2>
      <p>Author: {article.author}</p>
      <p>Created at: {article.created_at}</p>
      <p>Topic: {article.topic}</p>
      <p>Comment Count: {article.comment_count}</p>
      <p>Votes: {article.votes}</p>
      <img src={article.article_img_url} alt={article.title} />
      <p>{article.body}</p>
      <ul className="comment-ul"> Comments
        {Object.values(commentsById).map((comment) => {
        return(
            <li className="comment-li" key={comment.comment_id}> 
            By: {comment.author} 
            <br />
            {comment.body} 
            <br />
            Created: {comment.created_at}
            <br />
            Votes: {comment.votes}
            </li>
            

        )
    })}
    </ul>
    </section>
  );
};

export default SelectArticle;
