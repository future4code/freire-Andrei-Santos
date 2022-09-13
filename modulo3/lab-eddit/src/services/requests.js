import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeedPage } from "../routes/coordinator";

export const login = (body, clear, navigate) => {
  axios
    .post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToFeedPage(navigate);
    })
    .catch((err) => {
      alert(err.response.data);
    });
};

export const getPosts = (saveData) => {
  const token = localStorage.getItem("token");

  axios
    .get(`${BASE_URL}/posts`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      saveData(res.data);
    })
    .catch((err) => {
      alert(err.response.data);
    });
};

export const getPostComments = (saveData, id) => {
  const token = localStorage.getItem("token");

  axios
    .get(`${BASE_URL}/posts/${id}/comments`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      saveData(res.data);
    })
    .catch((err) => {
      alert(err.response.data);
    });
};
