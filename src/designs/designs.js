"use strict";
import stylesheet from "./designs.css";
export default class Designs {
  constructor(app) {
    this._app = app;
  }
  onShow() {
    let section = document.querySelector("#designs").cloneNode(true);
    section.querySelector('#dunkel').addEventListener("click", aufDunkel);
    section.querySelector('#hell').addEventListener("click", aufHell);


    return {
      className: "designs",
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
export async function aufDunkel() {
      alert("Button geht");
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80)";
    }
export async function aufHell() {
      alert("Button geht auch");
      document.body.style.backgroundImage = "url('./images/journeyNav.png')";

    }
