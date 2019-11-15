import Database from "../aufgabe.database.js";

export async function loadAufgaben() {
  return new Promise(async resolve => {
    let aufgaben = new Database.Aufgaben();
    var elements = await aufgaben.getAll();
    var html = "<ul class='entries' id='aufgabenEntries'>";
    if (elements.length == 0) {
      html += "<p id='leer'> NOCH KEINE AUFGABEN VORHANDEN </p></ul>";
      document.getElementById("aufgabenList").innerHTML = html;
    } else {
      generateList(elements, html);
    }
  }, 2000);
}

export function generateList(elements, html) {
  for (var i = 0; i < elements.length; i++) {
    html +=
      "<li class='kastenAußen'>" +
      "<div class='kastenInnen'id='kasten" +
      elements[i].id +
      "'>" +
      "<div id='fach' contenteditable='true'>" +
      elements[i].fach +
      "</div>" +
      "<div id='todo' contenteditable='true'>" +
      elements[i].todo +
      "</div>" +
      " " +
      "<div id='tageBisFällig' contenteditable='true'>" +
      elements[i].tageBisFällig +
      "</div>" +
      " tage bis fällig" +
      "<div id='buttons'>" +
      '<button type="button" class="removeAufgaben" id="' +
      elements[i].id +
      '">🗑️</button>' +
      " " +
      '<button type="button" class="update" id= "' +
      elements[i].id +
      '"> 💾 </button>' +
      " " +
      '<button type="button" class="erledigt" id= "' +
      elements[i].id +
      '"> ➖  </button>' +
      " " +
      "</div>" +
      "</div>" +
      "</li>";
  }
  html += "</ul>";

  document.getElementById("aufgabenList").innerHTML = html;
  var content = "<p> Du hast noch " + elements.length + " Aufgabe(n)</p>";
  document.getElementById("anzahlTodo").innerHTML = content;
  console.log("liste neu geladen");
}

export async function addAufgabe() {
  let aufgaben = new Database.Aufgaben();
  var newFach = document.getElementById("inputFach").value;
  var newTodo = document.getElementById("inputTodo").value;
  var newTage = document.getElementById("inputTage").value;

  await Promise.all([
    aufgaben.saveNew({
      fach: newFach,
      todo: newTodo,
      tageBisFällig: newTage
    })
  ]);

  var status = loadAufgaben();
  alert("Eingabe erfolgreich gespeichert.");
}

var lastClick = 0;
var delay = 20;

export function markErledigt(id) {
  //ohne dieses if ruft er es zu oft auf
  if (lastClick >= Date.now() - delay) return;
  lastClick = Date.now();

  if (document.getElementById("kasten" + id).className == "kastenInnen") {
    document.getElementById("kasten" + id).className = "kastenInnenErledigt";
    console.log("geändert");
  } else {
    document.getElementById("kasten" + id).className = "kastenInnen";
    console.log("geändert2");
  }
  return console.log("done");
}

export async function saveEdit(id) {
  var convertedId = +id;
  let aufgaben = new Database.Aufgaben();
  var element = await aufgaben.getById(convertedId);
  let section = document.getElementById("kasten" + id).cloneNode(true);
  var newFach = section.querySelector("#fach").innerHTML;
  var newTodo = section.querySelector("#todo").innerHTML;
  var newTage = section.querySelector("#tageBisFällig").innerHTML;

  await Promise.all([
    aufgaben.update(convertedId, {
      fach: newFach,
      todo: newTodo,
      tageBisFällig: newTage
    })
  ]);
  element = await aufgaben.getById(convertedId);
  alert("Änderungen erfolgreich gespeichert.");
}

export async function remove(id) {
  var convertedId = +id;
  let aufgaben = new Database.Aufgaben();
  await Promise.all([aufgaben.delete(convertedId)]);
  alert("Aufgabe erfolgreich gelöscht.");
  loadAufgaben();
}
