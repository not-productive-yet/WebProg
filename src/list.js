var elements = [{ fach: "webprog", todo: "app erstellen", tageBisFällig: 5 }];

function load() {
  var html = "<ul>";
  for (var i = 0; i < elements.length; i++) {
    html +=
      "<li>" +
      elements[i].fach +
      elements[i].todo +
      " " +
      elements[i].tageBisFällig +
      '<button class="remove" id="' +
      i +
      '">x</button></li>';
  }
  html += "</ul>";

  document.getElementById("list").innerHTML = html;
}

window.onload = function show() {
  load();
};

function add() {
  var newFach = document.getElementById("inputFach").value;
  var newTodo = document.getElementById("inputTodo").value;
  var newTage = document.getElementById("inputTage").value;
  elements.push({
    fach: newFach,
    todo: newTodo,
    tageBisFällig: newTage
  });
  console.log(elements);
  load();
}

document.getElementById("plusButton").addEventListener("click", add());

function remove() {}
