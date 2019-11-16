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
  let doneCount = 0;
  for (var i = 0; i < elements.length; i++) {
    let x = "";

    if (elements[i].done == "true") {
      x = "kastenInnenErledigt";
      doneCount++;
    } else {
      x = "kastenInnen";
    }

    html +=
      "<li class='kastenAußen'>" +
      "<div class='" +
      x +
      "'id='kasten" +
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

  var content =
    "<p>" + doneCount + "/" + elements.length + " Aufgabe(n) erledigt</p>";
  document.getElementById("anzahlTodo").innerHTML = content;
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
      tageBisFällig: newTage,
      done: "false"
    })
  ]);

  var status = loadAufgaben();
  alert("Eingabe erfolgreich gespeichert.");
}

var lastClick = 0;
var delay = 20;

export async function markErledigt(id) {
  //ohne ruft er es zu oft auf
  if (lastClick >= Date.now() - delay) return;
  lastClick = Date.now();

  var convertedId = +id;
  let aufgaben = new Database.Aufgaben();
  let section = document.getElementById("kasten" + id);
  var element = await aufgaben.getById(convertedId);

  if (section.className == "kastenInnen") {
    document.getElementById("kasten" + id).className = "kastenInnenErledigt";
    section.querySelector(".update").disabled = true;
    document.getElementById("snackbar").innerHTML = "Aufgabe erledigt";

    await Promise.all([
      aufgaben.update(convertedId, {
        done: "true"
      })
    ]);

    document.getElementById("snackbar").className = "show";
    setTimeout(() => {
      document.getElementById("snackbar").className = "hide";
    }, 3000);
  } else {
    document.getElementById("kasten" + id).className = "kastenInnen";

    await Promise.all([
      aufgaben.update(convertedId, {
        done: "false"
      })
    ]);

    section.querySelector(".update").disabled = false;
  }

  loadAufgaben();
}

export async function saveEdit(id) {
  //ohne ruft er es zu oft auf
  if (lastClick >= Date.now() - delay) return;
  lastClick = Date.now();

  var convertedId = +id;
  let aufgaben = new Database.Aufgaben();
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

  document.getElementById("snackbar").innerHTML = "Änderungen gespeichert";
  document.getElementById("snackbar").className = "show";

  setTimeout(() => {
    document.getElementById("snackbar").className = "hide";
  }, 3000);
}

export async function remove(id) {
  var convertedId = +id;
  let aufgaben = new Database.Aufgaben();
  await Promise.all([aufgaben.delete(convertedId)]);
  document.getElementById("snackbar").innerHTML = "Aufgabe gelöscht";
  document.getElementById("snackbar").className = "show";

  setTimeout(() => {
    document.getElementById("snackbar").className = "hide";
  }, 3000);
  loadAufgaben();
}
