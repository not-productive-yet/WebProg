"use strict";

import stylesheet from "./fächer.css";

export default class NeuesFach {
  constructor(app) {
    this._app = app;
  }
  onShow() {
    let section = document.querySelector("#neuesFach").cloneNode(true);
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
