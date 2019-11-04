var elements = [
  { fach: "webprogrammierung", todo: "app erstellen", tageBisFällig: 5 },
  { fach: "mobile applikationen", todo: "testen", tageBisFällig: 6 },
  { fach: "informatik", todo: "testen123", tageBisFällig: 7 }
];

export function loadAufgaben() {
  var html = "<ul class='entries' id='aufgabenEntries'>";
  for (var i = 0; i < elements.length; i++) {
    html +=
      "<li>" +
      "<div id='fach'>" +
      elements[i].fach +
      "</div>" +
      '<button class="remove" id="' +
      i +
      '">x</button>' +
      " " +
      "<div id='aufgabenBlock'>" +
      "<div id='todo'>" +
      elements[i].todo +
      "</div>" +
      " " +
      "<div id='tageBisFällig'>" +
      elements[i].tageBisFällig +
      "</div>" +
      " tage bis fällig" +
      "</div></li>";
  }

  html += "</ul>";

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
  //TODO: einbinden
  console.log("remove aufgerufen");
  var id = this.getAttribute("id");
  elements.splice(id, 1);
  load();
}
