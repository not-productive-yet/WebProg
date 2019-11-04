"use strict";

import stylesheet from "./app.css";

import Navigo from "navigo/lib/navigo.js";
import Fächer from "./fächer/fächer.js";
import Aufgaben from "./aufgaben/aufgaben.js";
import NeueAufgabe from "./aufgaben/neueAufgabe.js";
import NeuesFach from "./fächer/neuesFach.js";
import Kalender from "./kalender/kalender.js";

export default class App {
  constructor() {
    this._title = "Mein Lernplan";
    this._currentView = null;

    this._router = new Navigo();
    this._currentUrl = "";
    this._navAborted = false;

    this._router.on({
      "*": () => this.showAufgaben(),
      "/aufgaben": () => this.showAufgaben(),
      "/fächer/": () => this.showFächer(),
      "/neueAufgabe": () => this.showNeueAufgabe(),
      "/neuesFach": () => this.showNeuesFach(),
      "/kalender": () => this.showKalender()
    });

    this._router.hooks({
      after: params => {
        if (!this._navAborted) {
          this._currentUrl = this._router.lastRouteResolved().url;
        } else {
          this._router.pause(true);
          this._router.navigate(this._currentUrl);
          this._router.pause(false);

          this._navAborted = false;
        }
      }
    });
  }

  start() {
    this._router.resolve();
  }

  showAufgaben() {
    let view = new Aufgaben(this);
    this._switchVisibleView(view);
  }

  showFächer() {
    let view = new Fächer(this);
    this._switchVisibleView(view);
  }

  showNeueAufgabe() {
    let view = new NeueAufgabe(this);
    this._switchVisibleView(view);
  }

  showNeuesFach() {
    let view = new NeuesFach(this);
    this._switchVisibleView(view);
  }

  showKalender() {
    let view = new Kalender(this);
    this._switchVisibleView(view);
  }

  _switchVisibleView(view) {
    let newUrl = this._router.lastRouteResolved().url;
    let goon = () => {
      this._router.navigate(newUrl + "?goon");
    };

    if (this._currentView && !this._currentView.onLeave(goon)) {
      this._navAborted = true;
      return false;
    }

    document.title = `${this._title} – ${view.title}`;

    this._currentView = view;
    this._switchVisibleContent(view.onShow());
    return true;
  }

  _switchVisibleContent(content) {
    let app = document.querySelector("#app");
    let header = document.querySelector("#app > header");
    let main = document.querySelector("#app > main");

    app.className = "";
    header
      .querySelectorAll(".bottom")
      .forEach(e => e.parentNode.removeChild(e));
    main.innerHTML = "";

    if (content && content.className) {
      app.className = content.className;
    }

    if (content && content.topbar) {
      content.topbar.forEach(element => {
        element.classList.add("bottom");
        header.appendChild(element);
      });
    }

    if (content && content.main) {
      content.main.forEach(element => {
        main.appendChild(element);
      });
    }

    this._router.updatePageLinks();
  }
}
