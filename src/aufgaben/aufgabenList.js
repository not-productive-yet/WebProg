var elements = [
  { fach: "webprog", todo: "app erstellen", tageBisFällig: 5 },
  { fach: "mobile", todo: "testen", tageBisFällig: 6 },
  { fach: "test1", todo: "testen", tageBisFällig: 7 }
];

export function loadAufgaben() {
  var html = "<ul class='entries'>";
  for (var i = 0; i < elements.length; i++) {
    html +=
      "<li>" +
      elements[i].fach +
      " " +
      elements[i].todo +
      " " +
      elements[i].tageBisFällig +
      " " +
      '<button class="remove" id="' +
      i +
      '">x</button></li>' +
      '<button class="edit" id="' +
      i +
      '">edit</button></li>';
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
