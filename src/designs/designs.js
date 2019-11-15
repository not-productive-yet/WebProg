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
    section.querySelector('#normal').addEventListener("click", aufNormal);


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
export async function aufHell() {
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80)";
    }
export async function aufDunkel() {
    document.body.style.setProperty("--dark-green-color", "red");
    document.body.style.setProperty("--dark-green-transparent-color", "red");
    document.body.style.setProperty("--dark-green-less-transparent-color", "red");
    document.body.style.setProperty("--light-green-hover-color", "red");
    document.body.style.setProperty("--nav-selected-color", "red");
    document.body.style.setProperty("--fächer-green-color", "red");
    document.body.style.setProperty("--fächer-dark-green-color", "red");
    document.body.style.setProperty("--schrift-color", "rgba(0,0,0)");
    }
export async function aufNormal() {
    document.body.style.setProperty("--dark-green-color", "rgb(55, 74, 69, 0.8)");
    document.body.style.setProperty("--dark-green-transparent-color", "rgba(121, 148, 141, 0.7)");
    document.body.style.setProperty("--dark-green-less-transparent-color", "rgba(121, 148, 141, 0.9)");
    document.body.style.setProperty("--light-green-hover-color", "rgb(212, 255, 235)");
    document.body.style.setProperty("--nav-selected-color", "rgba(119, 149, 145)");
    document.body.style.setProperty("--fächer-green-color", "rgb(94, 123, 119, 0.7)");
    document.body.style.setProperty("--fächer-dark-green-color", "rgba(70, 98, 95)");
    document.body.style.setProperty("--schrift-color", "rgba(255,255,255)");
    }
