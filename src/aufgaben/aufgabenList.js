var elements = [
  { fach: "webprogrammierung", todo: "app erstellen", tageBisFällig: 5 },
  { fach: "mobile applikationen", todo: "testen", tageBisFällig: 6 },
  { fach: "informatik", todo: "testen123", tageBisFällig: 7 },
  { fach: "mathe", todo: "Algebra", tageBisFällig: 89 }
];

export function loadAufgaben() {
  var html = "<ul class='entries' id='aufgabenEntries'>";
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
      "</div>"
      "</div></li>";
  }

  html += "</ul>";

  //hier ein await document load
  var deleteButtons = document.querySelectorAll("removeAufgaben");
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", remove);
  }

  document.getElementById("aufgabenList").innerHTML = html;
}

export function addAufgabe() {
  console.log("imadd");
  var newFach = document.getElementById("inputFach").value;
  var newTodo = document.getElementById("inputTodo").value;
  var newTage = document.getElementById("inputTage").value;
  elements.push({
    fach: newFach,
    todo: newTodo,
    tageBisFällig: newTage
  });
  loadAufgaben();
}

function remove() {
  console.log("remove aufgerufen");
  var id = this.getAttribute("id");
  elements.splice(id, 1);
  loadAufgaben();
}
