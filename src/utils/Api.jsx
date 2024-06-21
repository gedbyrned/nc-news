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
    .then(({ data }) => {
      return data.articles;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getArticleById = (article_id) => {
  return ncNewsApi
    .get(`/articles/${article_id}`)
    .then(({ data }) => {
      return data.article;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getCommentsById = (article_id) => {
  return ncNewsApi
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const updateArticle = (article_id, voteChange) => {
  return ncNewsApi
    .patch(`/articles/${article_id}`, { inc_votes: voteChange })
    .then(({ data }) => {
      return data.article;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const addComment = (article_id, newComment) => {
  return ncNewsApi
    .post(`/articles/${article_id}/comments`, newComment)
    .catch((err) => {
      console.error(err);
    });
};

export const deleteComment = (commentId) => {
  return ncNewsApi
    .delete(`/comments/${commentId}`)
    .catch((err) => {
      console.error(err);
    });
};

export const getTopics = () => {
  return ncNewsApi
    .get("/topics")
    .then(({ data }) => {
      return data.topics;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getArticlesByTopic = (topic_slug) => {
  return ncNewsApi
    .get(`/articles`, {
      params: {
        topic: topic_slug,
      },
    })
    .then(({ data }) => {
      return data.articles;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getUsers = () => {
  return ncNewsApi
    .get(`/users`)
    .then(({ data }) => {
      return data.users;
    })
    .catch((err) => {
      console.error(err);
    });
};
