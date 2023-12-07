import Database from "better-sqlite3"

const database = require("better-sqlite3");

export const db = new Database("baza.sqlite3", { verbose: console.log });

module.exports = { db };