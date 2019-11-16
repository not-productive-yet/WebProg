"use strict";

import stylesheet from "./fächer.css";
import {
    loadFächer,
    remove,
    saveEdit
} from "./fächerList.js";

export default class Fächer {
    constructor(app) {
        this._app = app;
    }
    async onShow() {
    let section = document.querySelector("#fächer").cloneNode(true);
    var status = loadFächer();

    document.addEventListener(
        "click",
        function(event) {
            if (event.target.classList.contains("removeFach")) {
                var id = event.target.id;
                remove(id);
            }
            if (event.target.classList.contains("update")) {
                var id = event.target.id;
                saveEdit(id);
            }
        },
        false
    );

    return {
      className: "fächer",
      topbar: section.querySelectorAll("header > *"),
      main: section.querySelectorAll("main > *")
    };
  }

  async onLeave(goon) {
    return true;
  }

  get title() {
    return "Fächer";
  }
}
