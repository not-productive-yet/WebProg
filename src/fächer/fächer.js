"use strict";

import stylesheet from "./fächer.css";
import { loadFächer } from "./fächerList";

export default class Fächer {
  constructor(app) {
    this._app = app;
  }

  onShow() {
    let section = document.querySelector("#fächer").cloneNode(true);

    loadFächer();

    return {
      className: "fächer",
      topbar: section.querySelectorAll("header > *"),
      main: section.querySelectorAll("main > *")
    };
  }

  onLeave(goon) {
    return true;
  }

  get title() {
    return "Fächer";
  }
}
