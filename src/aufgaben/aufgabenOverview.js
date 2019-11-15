"use strict";

import stylesheet from "./aufgabenOverview.css";
import {
  loadAufgaben,
  remove,
  saveEdit,
  markErledigt
} from "./aufgabenHelpers.js";

export default class Aufgaben {
  constructor(app) {
    this._app = app;
  }
  async onShow() {
    let section = document.querySelector("#aufgaben").cloneNode(true);
    var status = loadAufgaben();

    document.addEventListener(
      "click",
      function(event) {
        if (event.target.classList.contains("removeAufgaben")) {
          var id = event.target.id;
          remove(id);
        }
        if (event.target.classList.contains("update")) {
          var id = event.target.id;
          saveEdit(id);
        }
        if (event.target.classList.contains("erledigt")) {
          var id = event.target.id;
          markErledigt(id);
        }
      },
      false
    );

    return {
      className: "aufgaben",
      topbar: section.querySelectorAll("header > *"),
      main: section.querySelectorAll("main > *")
    };
  }
  async onLeave(goon) {
    return true;
  }

  get title() {
    return "Aufgaben";
  }
}
