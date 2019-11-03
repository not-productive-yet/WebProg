"use strict";

import stylesheet from "./aufgaben.css";
import { loadAufgaben } from "./aufgabenList.js";

export default class Aufgaben {
  constructor(app) {
    this._app = app;
  }
  onShow() {
    let section = document.querySelector("#aufgaben").cloneNode(true);

    loadAufgaben();

    return {
      className: "aufgaben",
      topbar: section.querySelectorAll("header > *"),
      main: section.querySelectorAll("main > *")
    };
  }
  onLeave(goon) {
    return true;
  }

  get title() {
    return "Aufgaben";
  }
}
