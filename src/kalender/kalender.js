"use strict";

import stylesheet from "./kalender.css";

export default class Kalender {
  constructor(app) {
    this._app = app;
  }
  onShow() {
    let section = document.querySelector("#kalender").cloneNode(true);

    return {
      className: "kalender",
      topbar: section.querySelectorAll("header > *"),
      main: section.querySelectorAll("main > *")
    };
  }
  onLeave(goon) {
    return true;
  }

  get title() {
    return "Kalender";
  }
}
