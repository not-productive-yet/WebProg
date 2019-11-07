var elements = [
  { fachD: "Webprogrammieren", dozent: "Jannis Schalk", email: "j.s@gmail.com", klausurDatum: 14.06, notizD:"Test" },
  { fachD: "Mobile Applikationen", dozent: "Peitz", email:"pp@gmail.com", klausurDatum: 19.02, notizD: "Test" },
  { fachD: "Algebra", dozent: "Zeh-Marschke", email:"z.m@t-online.de", klausurDatum: 17.09, notizD: "Test" },
  { fachD: "VWL", dozent: "BEST DOZENT EUW", email:"f@t-online.de", klausurDatum: 9.05, notizD: "Hallo das ist ein Test" },
  { fachD: "Finanzierung und Investition", dozent: "Tuba", email:"tuba@dirkinLove.de", klausurDatum: 1.09, notizD: "Test" }
];

export function loadFächer() {
  var html = "<ul class='entries' id='fächerEntries'>";
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
      "<div>" +
      "</li>";
  }

  html += "</ul>";

  document.getElementById("fächerList").innerHTML = html;
}

export function addFach(){
    console.log("imadd");
    var newFach = document.getElementById("inputFach").value;
    var newDozent = document.getElementById("inputDozent").value;
    var newEmail = document.getElementById("inputEmail").value;
    var newKlausurTermin = document.getElementById("inputKlausur-Termin").value;
    var newNotiz = document.getElementById("inputNotiz").value;
    elements.push({
        fachD: newFach,
        dozent: newDozent,
        email: newEmail,
        klausurDatum: newKlausurTermin,
        notizD: newNotiz
    });
    loadFächer();
}
