/*
  This file acts as the central routing for the content area of the page.
*/
import FlashcardLanding from "./StudyTools/Landings/FlashcardLanding"
import ExampleContent from "./Main/ExampleContent";
import Flashcard from "./StudyTools/Usage/Flashcard";
import React from "react";
import requireAuth from "/src/utils/requireAuth.js";
import { Route } from "react-router-dom";

class Main extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Route
          exact
          path="/" // An example of passing props to a component as it is rendered by the router
          render={() => <FlashcardLanding classes={classes} />}
          onEnter={requireAuth} //Require Auth not coded
        />
        <Route path="/flashcards"
          render={() => <Flashcard classes={classes}/>}
        />
        <Route path="/login" />
        <Route path="/logout" />
        <Route path="/checkout" />
      </div>
    );
  }
}

export default Main;
