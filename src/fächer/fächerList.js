var elements = [
  { fach: "webprog", dozent: "irgendwer", notiz: "jskanslas", klausur: 5.04 },
  { fach: "mobile", dozent: "irgendwerrrr", notiz: "djaokdja", klausur: 6.04 },
  { fach: "test1", dozent: "irgendwer3", notiz: "dajpai", klausur: 7.04 }
];

export function loadFächer() {
  var html = "<ul class='entries'>";
  for (var i = 0; i < elements.length; i++) {
    html +=
      "<li>" +
      elements[i].fach +
      " " +
      elements[i].dozent +
      " " +
      elements[i].notiz +
      " " +
      elements[i].klausur +
      " " +
      '<button class="remove" id="' +
      i +
      '">x</button></li>' +
      '<button class="edit" id="' +
      i +
      '">edit</button></li>';
  }

  html += "</ul>";

  document.getElementById("fächerList").innerHTML = html;
}
