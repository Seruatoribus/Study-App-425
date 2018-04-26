/*
  This file is used to render our entire application inside our "Frame" and
  does so inside of a browser router inorder to allow routing through the DOM
*/

import Frame from "./components/Frame";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

render(
  <BrowserRouter>
    <Frame />
  </BrowserRouter>,
  document.getElementById("root")
);
