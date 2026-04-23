const fs = require("fs");

const DB_FILE = "./server/db.json";

function loadDB() {
  try {
    return JSON.parse(fs.readFileSync(DB_FILE));
  } catch {
    return { products: [] };
  }
}

function saveDB(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

function validateProduct(p) {
  return (
    p.name &&
    p.price &&
    p.brand &&
    p.model &&
    p.category &&
    typeof p.price === "number"
  );
}

module.exports = { loadDB, saveDB, validateProduct };