import Database from "../fach.database.js";
export async function loadFächer() {
  let fächer = new Database.Fächer();

  var elements = await fächer.getAll();

  console.log(elements);
  var html = "<ul class='entries' id='fächerEntries'>";
  if (elements.length == 0) {
    html += "<p id='leer'> NOCH KEINE AUFGABEN VORHANDEN </p>";
  } else {
    for (var i = 0; i < elements.length; i++) {
      html +=
        "<li id='kastenAußenFächer'>" +
        "<div id='kastenInnenFächer'>" +
        "<div id='fachD'>" +
        elements[i].fachD +
        "</div>" +
        "<div id='dozent'>" +
        "<b>Dozent: </b>" +
        elements[i].dozent +
        "</div>" +
        "<div id='email'>" +
        "<b>E-Mail: </b>" +
        elements[i].email +
        "</div>" +
        "<div id='klausurDatum'>" +
        "<b>Klausur-Termin: </b>" +
        elements[i].klausurDatum +
        "</div>" +
        " " +
        "<div id='notizD'>" +
        "<b>Notiz: </b>" +
        elements[i].notizD +
        "</div>" +
        " " +
        // "<div id='buttonFächer'>" +
        // '<a href="/neuesFach#/neuesFach"><button type="button" class="saveAndBack" class="button" class="editFach" id="editFach"' +
        // '>BEARBEITEN</button></a>' +
        // "</div>" +
        "</div>" +
        "</li>";
    }

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
  alert("Ihre Eingabe wurde erfolgreich gespeichert.");
}
