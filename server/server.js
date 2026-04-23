const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { loadDB, saveDB, validateProduct } = require("./utils");

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;