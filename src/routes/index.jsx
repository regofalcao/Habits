import { Switch, Route } from "react-router-dom";

// import Route from "./Route";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import GroupsList from "../pages/GroupsList";
import MyGroups from "../pages/MyGroups";
import Group from "../pages/Group";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/groupsList" component={GroupsList} isPrivate />
      <Route path="/myGroups" component={MyGroups} isPrivate />
      <Route path="/group/:id" component={Group} isPrivate />
    </Switch>
  );
};

export default Routes;
