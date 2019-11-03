"use strict";

import stylesheet from "./aufgaben.css";
import { addAufgabe } from "./aufgabenList.js";

export default class NeueAufgabe {
  constructor(app) {
    this._app = app;
  }
  onShow() {
    let section = document.querySelector("#neueAufgabe").cloneNode(true);
    return {
      className: "neueAufgabe",
      topbar: section.querySelectorAll("header > *"),
      main: section.querySelectorAll("main > *")
    };
  }
  onLeave(goon) {
    return true;
  }

  get title() {
    return "Neue Aufgabe";
  }
}
