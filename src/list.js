<<<<<<< HEAD
var elements = [{ fach: "webprog", todo: "app erstellen", tageBisFällig: 5 }];

function load() {
  var html = "<ul>";
=======
var elements = [
  { fach: "webprog", todo: "app erstellen", tageBisFällig: 5 },
  { fach: "mobile", todo: "testen", tageBisFällig: 6 }
];

window.onload = function show() {
  load();
  var addEntry = document.getElementById("addEntry");
  addEntry.addEventListener("click", add);
  var classname = document.getElementsByClassName("remove");
  for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener("click", remove);
  }
  var goToAddEntry = document.getElementById("goToAddEntry");
  goToAddEntry.addEventListener("click", display);

  var addEntry = document.getElementsByClassName("addEntry");
};

function load() {
  var html = "<ul class='entries'>";
>>>>>>> 249574e2f9fd2259fe1ee9fefa6a9a5d01c47980
  for (var i = 0; i < elements.length; i++) {
    html +=
      "<li>" +
      elements[i].fach +
<<<<<<< HEAD
      elements[i].todo +
      " " +
      elements[i].tageBisFällig +
      '<button class="remove" id="' +
      i +
      '">x</button></li>';
=======
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
>>>>>>> 249574e2f9fd2259fe1ee9fefa6a9a5d01c47980
  }
  html += "</ul>";

  document.getElementById("list").innerHTML = html;
}

<<<<<<< HEAD
window.onload = function show() {
  load();
};

function add() {
=======
function add() {
  //muss wahrsch async sein damit er auf user input wartet
>>>>>>> 249574e2f9fd2259fe1ee9fefa6a9a5d01c47980
  var newFach = document.getElementById("inputFach").value;
  var newTodo = document.getElementById("inputTodo").value;
  var newTage = document.getElementById("inputTage").value;
  elements.push({
    fach: newFach,
    todo: newTodo,
    tageBisFällig: newTage
  });
<<<<<<< HEAD
  console.log(elements);
  load();
}

document.getElementById("plusButton").addEventListener("click", add());

function remove() {}
=======
  hide();
  load();
}

function remove() {
  console.log("remove aufgerufen");
  var id = this.getAttribute("id");
  elements.splice(id, 1);
  load();
}

function edit() {}

function display() {
  addEntry.className = "show";
}

function hide() {
  addEntry.className = "hide";
}
>>>>>>> 249574e2f9fd2259fe1ee9fefa6a9a5d01c47980
