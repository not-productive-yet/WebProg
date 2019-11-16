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
async function aufHell() {
  document.body.style.backgroundImage = "url(https://images.alphacoders.com/294/thumb-1920-294151.gif)";
  document.body.style.setProperty("--dark-green-color", " rgb(52, 60, 69, 0.8");
  document.body.style.setProperty("--dark-green-transparent-color", " rgba(119, 127, 146, 0.7");
  document.body.style.setProperty("--dark-green-transparent-color-hover", " rgb(119, 127, 146");
  document.body.style.setProperty("--dark-green-transparent-color-hover-medium", " rgb(147, 147, 173");
  document.body.style.setProperty("--dark-green-transparent-color-hover-light", " rgb(173, 172, 199");
  document.body.style.setProperty("--dark-green-less-transparent-color", " rgba(119, 123, 146, 0.9");
  document.body.style.setProperty("--light-green-hover-color", " rgb(210, 209, 255");
  document.body.style.setProperty("--nav-selected-color", " rgba(117, 121, 147");
  document.body.style.setProperty("--fächer-green-color", " rgb(93, 96, 119, 0.7");
  document.body.style.setProperty("--fächer-dark-green-color", " rgba(68, 76, 94");
  document.body.style.setProperty("--schrift-color", " rgba(255, 255, 255");
    }
    async function aufDunkel() {
  document.body.style.backgroundImage = "url(https://images5.alphacoders.com/711/thumb-1920-711435.jpg)";
  document.body.style.setProperty("--dark-green-color", "rgb(141, 62, 62, 0.8");
  document.body.style.setProperty("--dark-green-transparent-color", " rgba(172, 108, 108, 0.7");
  document.body.style.setProperty("--dark-green-transparent-color-hover", " rgb(172, 108, 108,");
  document.body.style.setProperty("--dark-green-transparent-color-hover-medium", " rgb(193, 153, 153");
  document.body.style.setProperty("--dark-green-transparent-color-hover-light", " rgb(210, 185, 182");
  document.body.style.setProperty("--dark-green-less-transparent-color", " rgba(146, 123, 119, 0.9");
  document.body.style.setProperty("--light-green-hover-color", " rgb(255, 215, 209");
  document.body.style.setProperty("--nav-selected-color", " rgba(147, 121, 117");
  document.body.style.setProperty("--fächer-green-color", " rgb(121, 97, 93, 0.7");
  document.body.style.setProperty("--fächer-dark-green-color", " rgba(94, 68, 68");
  document.body.style.setProperty("--schrift-color", " rgba(255, 255, 255");
    }
async function aufNormal() {
  document.body.style.backgroundImage = "url(https://i.pinimg.com/originals/35/0b/f3/350bf3ecb77455ac53a9651f2425bc09.jpg)";
  document.body.style.setProperty("--dark-green-color", " rgb(55, 74, 69, 0.8");
  document.body.style.setProperty("--dark-green-transparent-color", " rgba(121, 148, 141, 0.7");
  document.body.style.setProperty("--dark-green-transparent-color-hover", " rgb(121, 148, 141");
  document.body.style.setProperty("--dark-green-transparent-color-hover-medium", " rgb(147, 175, 168");
  document.body.style.setProperty("--dark-green-transparent-color-hover-light", " rgb(174, 202, 195");
  document.body.style.setProperty("--dark-green-less-transparent-color", " rgba(121, 148, 141, 0.9");
  document.body.style.setProperty("--light-green-hover-color", " rgb(212, 255, 235");
  document.body.style.setProperty("--nav-selected-color", " rgba(119, 149, 145");
  document.body.style.setProperty("--fächer-green-color", " rgb(94, 123, 119, 0.7");
  document.body.style.setProperty("--fächer-dark-green-color", " rgba(70, 98, 95");
  document.body.style.setProperty("--schrift-color", " rgba(255, 255, 255");
    }
