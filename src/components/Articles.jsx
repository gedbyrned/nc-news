const Articles = ({articles}) => {
    return (
        <section className="article-list">
        <h2>All Articles</h2>

       <ul>
        {articles.map((article) => {
           return ( <li className="article" key={article.article_id}>
            <p className="article-title">{article.title}</p>
            <img src={article.article_img_url} />
            <p>Author: {article.author}</p>
            <p>Created at: {article.created_at}</p>
            <p>Topic: {article.topic}</p>
            <p>Comment Count: {article.comment_count}</p>
            <p>Votes: {article.votes}</p>
            <br></br>
          </li>
          );
        })}
        
       </ul>
        </section>
    
    )
    
    }
    
    
    
    export default Articles; 