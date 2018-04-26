/*
  This file acts as the central routing for the content area of the page.
*/

import ExampleContent from "./Main/ExampleContent";
import React from "react";
import { Route } from "react-router-dom";

class Main extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Route
          exact
          path="/"
          // An example of passing props to a component as it is rendered by the router
          render={() => <ExampleContent classes={classes} />}
        />
      </div>
    );
  }
}

export default Main;
