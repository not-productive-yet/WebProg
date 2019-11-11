"use strict";

import Dexie from "dexie";

let database = new Dexie("Meine-Aufgaben");

database.version(1).stores({
  aufgaben: "++id, fach, todo, tageBisFällig"
});

class AufgabenDB {
  async saveNew(aufgabe) {
    return database.aufgaben.add(aufgabe, [0]);
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
  AufgabenDB
};
