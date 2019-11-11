import Database from "../fach.database.js";
export async function loadFächer() {
  let fächer = new Database.Fächer();

  var elements = await fächer.getAll();

  console.log(elements);
  var html = "<ul class='entries' id='fächerEntries'>";
<<<<<<< HEAD
  if (elements.length == 0) {
    html += "<p id='leer'> NOCH KEINE AUFGABEN VORHANDEN </p>";
  } else {
    for (var i = 0; i < elements.length; i++) {
      html +=
        "<li>" +
        "<div id='fachD'>" +
        elements[i].fachD +
        "</div>" +
        "<div id='strich'>" +
        "<div id='dozent'>" +
        "Dozent: " +
        elements[i].dozent +
        "</div>" +
        " " +
        "<div id='email'>" +
        " E-Mail: " +
        elements[i].email +
        "</div>" +
        " " +
        "<div id='klausurDatum'>" +
        "Klausur-Termin: " +
        elements[i].klausurDatum +
        "</div>" +
        " " +
        "<div id='notizD'>" +
        "Notiz: " +
        elements[i].notizD +
        "</div>" +
        " " +
        "<div id='buttonFächer'>" +
        '<a href="/neuesFach" data-navigo><button type="button" class="saveAndBack" class="button" class="editFach" id="' +
        i +
        '">Edit-Fach</button></a>' +
        "<div>" +
        "</li>";
    }
=======
  for (var i = 0; i < elements.length; i++) {
    html +=
      "<li id='kastenAußen'>" +
      "<div id='kastenInnen'>" +
      "<div id ='fachD'>"+
      elements[i].fachD +
      "</div>"+
      "<div id='dozent'>" +
      "Dozent: " +
      elements[i].dozent +
      "</div>" +
      " " +
      "<div id='email'>"+
      " E-Mail: " +
      elements[i].email +
      "</div>" +
      " " +
      "<div id='klausurDatum'>" +
      "Klausur-Termin: " +
      elements[i].klausurDatum +
      "</div>" +
      " " +
      "<div id='notizD'>" +
      "Notiz: " +
      elements[i].notizD +
      "</div>" +
      " " +
      "<div id='buttonFächer'>"+
      '<a href="/neuesFach" data-navigo><button type="button" class="saveAndBack" class="button" class="editFach" id="' +
      i +
      '">Edit-Fach</button></a>' +

      "</div>"+
      "</div>"+
      "</li>";
  }
>>>>>>> e1658242a12d3cad6cdc0a2a55546c1b6c63108a

    html += "</ul>";
  }

  document.getElementById("fächerList").innerHTML = html;
}

export async function addFach() {
  let fächer = new Database.Fächer();

  var newFach = document.getElementById("inputFach").value;
  var newDozent = document.getElementById("inputDozent").value;
  var newEmail = document.getElementById("inputEmail").value;
  var newKlausurTermin = document.getElementById("inputKlausur").value;
  var newNotiz = document.getElementById("inputNotiz").value;
  await Promise.all([
    fächer.saveNew({
      fachD: newFach,
      dozent: newDozent,
      email: newEmail,
      klausurDatum: newKlausurTermin,
      notizD: newNotiz
    })
  ]);

  loadFächer();
}
