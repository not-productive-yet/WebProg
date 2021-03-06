"use strict";
import stylesheet from "./designs.css";
export default class Designs {
  constructor(app) {
    this._app = app;
  }
  onShow() {
    let section = document.querySelector("#designs").cloneNode(true);
    section.querySelector('#dunkel').addEventListener("click", rot);
    section.querySelector('#hell').addEventListener("click", gelb);
    section.querySelector('#normal').addEventListener("click", braun);


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
async function rot() {
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
async function gelb() {
  document.body.style.backgroundImage = "url(https://c.wallhere.com/photos/5e/7c/The_Journey_video_games-1152583.jpg!d)";
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
  document.body.style.setProperty("--schrift-color", " rgba(0, 0, 0");
    }

async function braun() {
  document.body.style.backgroundImage = "url(https://gamespot1.cbsistatic.com/uploads/screen_kubrick/416/4161502/2309269-tribute_to_journey_by_matou31-d5um8hb.jpg)";
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
