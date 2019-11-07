"use strict";

import stylesheet from "./neuesFach.css";
import { addFach } from "./fächerList.js"

export default class NeuesFach {
  constructor(app) {
    this._app = app;
  }
  onShow() {
    let section = document.querySelector("#neuesFach").cloneNode(true);
    section.querySelector('#saveFach').addEventListener("click", addFach);
    return {
      className: "neuesFach",
      topbar: section.querySelectorAll("header > *"),
      main: section.querySelectorAll("main > *")
    };
  }
  onLeave(goon) {
    return true;
  }

  get title() {
    return "Neues Fach";
  }
}
