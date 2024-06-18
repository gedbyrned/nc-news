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