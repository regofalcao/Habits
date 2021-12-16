import { Redirect, Route as ReactDomRoute } from "react-router-dom";

const Route = ({ isPrivated = false, component: Component, ...rest }) => {
  const token = localStorage.getItem("@kenzieHabits:token");
  console.log("token: ", !!token);
  console.log("Privado:", !!isPrivated);
  console.log("============================");

  // true e true => ok
  // true e false => login
  // false e true => dashboard
  // false e false => ok
  return (
    <ReactDomRoute
      {...rest}
      render={() => {
        return isPrivated && !!token ? (
          <Component />
        ) : (
          <Redirect to={isPrivated ? "/login" : "/dashboard"} />
        );
      }}
    />
  );
};

export default Route;
