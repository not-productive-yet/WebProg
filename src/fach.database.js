"use strict";

import Dexie from "dexie/dist/dexie.js";

let database = new Dexie("Datenbank2");

database.version(1).stores({
  fächer: "++id, fach, dozent, email, klausurDatum, notiz"
});

class Fächer {
  async saveNew(fach) {
    return database.fächer.add(fach);
  }

  async update(fach) {
    return database.fächer.put(fach);
  }

  async delete(id) {
    return database.fächer.delete(id);
  }

  async clear() {
    return database.fächer.clear();
  }

  async getById(id) {
    return database.fächer.get(id);
  }

  async getAll() {
    return database.fächer.toArray();
  }
}

export default {
  database,
  Fächer
};
