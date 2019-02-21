import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Board from './Board';

const jsx = (
  <div>
    <Header />
    <Board />
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));
  