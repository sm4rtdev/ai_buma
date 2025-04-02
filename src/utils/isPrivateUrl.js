const unauthUrl = ["/home", "/new"];

export const isPrivateUrl = (path, isAuth) => {
  if (isAuth) {
    return unauthUrl.filter((item) => path.includes(item)).length > 0
      ? true
      : false;
  } else {
    console.log(
      unauthUrl.filter((item) => path.includes(item)),
      isAuth
    );
    return unauthUrl.filter((item) => path.includes(item)).length > 0 ||
      path === "/"
      ? false
      : true;
  }
};
