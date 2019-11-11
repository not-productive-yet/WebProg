"use strict";

import Dexie from "dexie/dist/dexie.js";

let database = new Dexie("Datenbank1");

database.version(1).stores({
  aufgaben: "++id, fach, todo, tageBisFällig"
});

class Aufgaben {
  async saveNew(aufgabe) {
    return database.aufgaben.add(aufgabe);
  }

  async update(aufgabe) {
    return database.aufgaben.put(aufgabe);
  }

  async delete(id) {
    return database.aufgaben.delete(id);
  }

  async clear() {
    return database.aufgaben.clear();
  }

  async getById(id) {
    return database.aufgaben.get(id);
  }

  async getAll() {
    return database.aufgaben.toArray();
  }
}

export default {
  database,
  Aufgaben
};
