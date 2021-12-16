import { Redirect, Route as ReactDomRoute } from "react-router-dom";

const Route = ({ isPrivated = false, component: Component, ...rest }) => {
  const token = localStorage.getItem("@kenzieHabits:token");

  return (
    <ReactDomRoute
      {...rest}
      render={() => {
        return isPrivated === !!token ? (
          <Component />
        ) : (
          <Redirect to={isPrivated ? "/login" : "/dashboard"} />
        );
      }}
    />
  );
};

export default Route;
