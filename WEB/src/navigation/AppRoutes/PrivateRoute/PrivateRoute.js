import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      user ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/auth", state: { from: props.location } }} />
      )
    }
  />
);

export default PrivateRoute;
