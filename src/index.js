import React from "react";
import ReactDOM from "react-dom";

import Comment from "./Comment";

const userInfo = {
  firstName: "小塔",
  lastName: "王"
};

const rootElement = document.getElementById("root");
const element = <Comment userInfo={userInfo} date={new Date()} />;
ReactDOM.render(element, rootElement);
