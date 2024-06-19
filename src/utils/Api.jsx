import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://geds-api-remote-2.onrender.com/api",
});

export const getArticles = () => {
    return ncNewsApi
      .get("/articles", {
        params: {
            limit: 5,
            p: 1,
          },
        })
      .then(({data}) => {
        return data.articles;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  export const getArticleById = (article_id) => {
    return ncNewsApi
      .get(`/articles/${article_id}`)
      .then(({ data }) => {
        return data.article;
      })
      .catch((err) => {
        console.log(err);
      });
  };


  export const getCommentsById = (article_id) => {
    return ncNewsApi
      .get(`/articles/${article_id}/comments`)
      .then(({data}) => {
       return data.comments
      })
      .catch((err) => {
        console.log(err);
      });
  };

  export const updateArticle = (article_id, voteChange) => {
    return ncNewsApi
      .patch(`/articles/${article_id}`, { inc_votes: voteChange })
      .then(({ data }) => {
        return data.article;
      });
  };


export const addComment = (article_id, newComment) => {
  return ncNewsApi
  .post(`/articles/${article_id}/comments`, {
    votes: newComment.votes,
    created_at: newComment.created_at,
    author: newComment.author,
    body: newComment.body
  });
};