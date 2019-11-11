import Database from "../aufgabe.database.js";

export async function loadAufgaben() {
  let aufgaben = new Database.Aufgaben();

  var elements = await aufgaben.getAll();

  console.log(elements);
  var html = "<ul class='entries' id='aufgabenEntries'>";
  if (elements.length == 0) {
    html += "<p id='leer'> NOCH KEINE AUFGABEN VORHANDEN </p>";
  } else {
    for (var i = 0; i < elements.length; i++) {
      html +=
        "<li>" +
        "<div id='fach'>" +
        elements[i].fach +
        "</div>" +
        "<div id='aufgabenBlock'>" +
        "<div id='todo'>" +
        elements[i].todo +
        "</div>" +
        " " +
        "<div id='tageBisFällig'>" +
        elements[i].tageBisFällig +
        "</div>" +
        " tage bis fällig" +
        "<div id='buttons'>" +
        '<button type="button" class="saveAndBack" class="button" class="removeAufgaben" id=""' +
        i +
        '">x</button>' +
        " " +
        '<a href="/neueAufgabe" data-navigo><button type="button" class="saveAndBack" class="button" class="editAufgabe" id="' +
        i +
        '">Edit-Aufgabe</button></a>' +
        " " +
        "</div>" +
        "</div></li>";
    }
    html += "</ul>";
    var deleteButtons = document.querySelectorAll("removeAufgaben");
    for (var i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener("click", remove);
    }
  }
  document.getElementById("aufgabenList").innerHTML = html;
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
