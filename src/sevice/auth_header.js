const authHeader = () => {
  let user = localStorage.length === 0 ? null : JSON.parse(localStorage.user);
  if (user && user.token) {
    return { Authorization: "Bearer " + user.token };
  } else {
    return {};
  }
};

export { authHeader };
