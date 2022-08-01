export const goToFeedPage = (navigate) => {
  navigate("/feed");
};

export const goToLoginPage = (navigate) => {
  navigate("/");
};

export const goToPostPage = (navigate, id) => {
  navigate(`/post/${id}`);
};

export const goToSignUpPage = (navigate) => {
  navigate("/sign-up");
};

export const goToErrorPage = (navigate) => {
  navigate("*");
};
