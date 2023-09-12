import axios from "./axios";
import Api from "./Api";

const login = (email, password) => {
  return axios
    .post(`${Api.AUTH_LOGIN}`, {
      email,
      password,
    })
    .then(handleResponse)
    .then((user) => {
      if (user) {
        sessionStorage.user = JSON.stringify(user);
      }
      return user;
    });
};
const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("mainmenu");
  const root = window.location.origin;

  window.location.href = root;
};

const getCurrentUser = () => {
  const userSession =
    localStorage.user !== undefined ? JSON.parse(localStorage.user) : null;
  return userSession;
};

const handleResponse = (response) => {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        //location.reload();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
};

export default {
  login,
  logout,
  getCurrentUser,
};
