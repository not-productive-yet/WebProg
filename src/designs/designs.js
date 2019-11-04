"use strict";

import stylesheet from "./designs.css";

export default class Designs {
  constructor(app) {
    this._app = app;
  }
  onShow() {
    let section = document.querySelector("#designs").cloneNode(true);

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
    return "Designs";
  }
}
