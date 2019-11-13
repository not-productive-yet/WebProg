import Database from "../aufgabe.database.js";

export async function loadAufgaben() {
  let aufgaben = new Database.Aufgaben();

  var elements = await aufgaben.getAll();
  var html = "<ul class='entries' id='aufgabenEntries'>";
  if (elements.length == 0) {
    html += "<p id='leer'> NOCH KEINE AUFGABEN VORHANDEN </p>";
  } else {
    for (var i = 0; i < elements.length; i++) {
      html +=
        "<li id='kastenAußen'>" +
        "<div id='kastenInnen'>" +
        "<div id='fach'>" +
        elements[i].fach +
        "</div>" +
        "<div id='todo'>" +
        elements[i].todo +
        "</div>" +
        " " +
        "<div id='tageBisFällig'>" +
        elements[i].tageBisFällig +
        "</div>" +
        " tage bis fällig" +
        // "<div id='buttons'>" +
        // '<button type="button" class="saveAndBack" class="button" class="removeAufgaben" id="remove"' +
        // i +
        // '">x</button>' +
        // " " +
        // '<a href="" data-navigo><button type="button" class="saveAndBack" class="button" class="editAufgabe" id="edit"' +
        // i +
        // '">BEARBEITEN</button></a>' +
        // " " +
        // "</div>" +
        "</div>" +
        "</li>";
    }
    html += "</ul>";
    var deleteButtons = document.querySelectorAll("removeAufgaben");
    for (var i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener("click", remove);
    }
  }
  document.getElementById("aufgabenList").innerHTML = html;
  var content = "<p> Du hast noch " + elements.length + " Aufgaben</p>";
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
      tageBisFällig: newTage
    })
  ]);

  loadAufgaben();
}

async function remove() {
  //problem liegt beim anhängen des EventListener
  console.log("remove aufgerufen");
  let aufgaben = new Database.Aufgaben();
  var id = this.getAttribute("id");
  aufgaben.delete(id);
  loadAufgaben();
}
