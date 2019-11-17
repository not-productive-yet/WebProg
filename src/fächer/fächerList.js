import Database from "../fach.database.js";

export async function loadFächer() {
  return new Promise(async resolve => {
    let fächer = new Database.Fächer();
    var elements = await fächer.getAll();
    var html = "<ul class='entries' id='fächerEntries'>";
    if (elements.length == 0) {
      html += "<p id='leer'> ES SIND NOCH KEINE FÄCHER VORHANDEN</p>";
      document.getElementById("fächerList").innerHTML = html;
    } else {
      generateList(elements, html);
    }
  }, 2000);
}

export function generateList(elements, html) {
  for (var i = 0; i < elements.length; i++) {
    html +=
      "<li class='kastenAußenFächer'>" +
      "<div class='kastenInnenFächer' id='kastenFächer" +
      elements[i].id +
      "'>" +
      "<div id='fachD' contenteditable='true'>" +
      elements[i].fach +
      "</div>" +
      "<div id='dozentBlock'>" +
      "<b id='dozentÜber'>Dozent: </b>" +
      "<div id='dozent' contenteditable='true'>" +
      elements[i].dozent +
      "</div>" +
      "</div>" +
      "<div id='emailBlock'>" +
      "<b id='emailÜber'>E-Mail: </b>" +
      "<div id='email' contenteditable='true'>" +
      elements[i].email +
      "</div>" +
      "</div>" +
      "<div id='klausurDatumBlock'>" +
      "<b id='klausurDatumÜber'>Klausur-Termin: </b>" +
      "<div id='klausurDatum' contenteditable='true'>" +
      elements[i].klausurDatum +
      "</div>" +
      "</div>" +
      " " +
      "<div id='notizDBlock'>" +
      "<b id='notizDÜber'>Notiz: </b>" +
      "<div id='notizD' contenteditable='true'>" +
      elements[i].notiz +
      "</div>" +
      "</div>" +
      "<div id='buttonFächer'>" +
      '<button type="button" class="removeFach" id="' +
      elements[i].id +
      '">🗑️</button>' +
      " " +
      '<button type="button" class="updateFach" id= "' +
      elements[i].id +
      '"> 💾</button>' +
      " " +
      "</div>" +
      "</div>" +
      "</li>";
  }
  html += "</ul>";

  document.getElementById("fächerList").innerHTML = html;
}

export async function addFach() {
  let fächer = new Database.Fächer();

  var newFach = document.getElementById("inputFach").value;
  var newDozent = document.getElementById("inputDozent").value;
  var newEmail = document.getElementById("inputEmail").value;
  var newKlausurTermin = document.getElementById("inputKlausur").value;
  var newNotiz = document.getElementById("inputNotiz").value;

  if (newFach == "" || newDozent == "" || newEmail == "") {
    if (newKlausurTermin == "" || newNotiz == "") {
      alert(
        "Ihre Eingabe ist unvollständig! Bitte geben Sie bei allen Feldern etwas an."
      );
      return;
    }
    return;
  }

  await Promise.all([
    fächer.saveNew({
      fach: newFach,
      dozent: newDozent,
      email: newEmail,
      klausurDatum: newKlausurTermin,
      notiz: newNotiz
    })
  ]);

  var status = loadFächer();
  alert("Ihre Eingabe wurde erfolgreich gespeichert.");
}

var lastClick = 0;
var delay = 20;

export async function saveEdit(id) {
  if (lastClick >= Date.now() - delay) return;
  lastClick = Date.now();

  var convertedId = +id;
  let fächer = new Database.Fächer();
  var element = await fächer.getById(convertedId);

  let section = document.getElementById("kastenFächer" + id).cloneNode(true);
  var newFach = section.querySelector("#fachD").innerHTML;
  var newDozent = section.querySelector("#dozent").innerHTML;
  var newEmail = section.querySelector("#email").innerHTML;
  var newKlausurTermin = section.querySelector("#klausurDatum").innerHTML;
  var newNotiz = section.querySelector("#notizD").innerHTML;

  await Promise.all([
    fächer.update(convertedId, {
      fach: newFach,
      dozent: newDozent,
      email: newEmail,
      klausurDatum: newKlausurTermin,
      notiz: newNotiz
    })
  ]);
  alert("Änderungen erfolgreich gespeichert.");
}

export async function remove(id) {
  if (lastClick >= Date.now() - delay) return;
  lastClick = Date.now();

  var convertedId = +id;
  let fächer = new Database.Fächer();
  await Promise.all([fächer.delete(convertedId)]);
  alert("Das Fach wurde erfolgreich gelöscht.");
  loadFächer();
}
