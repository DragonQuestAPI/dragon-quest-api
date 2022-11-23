const express = require("express");
const fs = require("fs");
const path = require("path");

const pathToJSONRagnar = path.join(__dirname, "../data/characters/ragnar.json");
const fileRagnar = JSON.parse(fs.readFileSync(pathToJSONRagnar).toString());
const pathToJSONAlena = path.join(__dirname, "../data/characters/alena.json");
const fileAlena = JSON.parse(fs.readFileSync(pathToJSONAlena).toString());
const pathToJSONKyril = path.join(__dirname, "../data/characters/kyril.json");
const fileKyril = JSON.parse(fs.readFileSync(pathToJSONKyril).toString());
const pathToJSONBorya = path.join(__dirname, "../data/characters/borya.json");
const fileBorya = JSON.parse(fs.readFileSync(pathToJSONBorya).toString());
const pathToJSONTorneko = path.join(
  __dirname,
  "../data/characters/torneko.json"
);
const fileTorneko = JSON.parse(fs.readFileSync(pathToJSONTorneko).toString());
const pathToJSONMeena = path.join(__dirname, "../data/characters/meena.json");
const fileMeena = JSON.parse(fs.readFileSync(pathToJSONMeena).toString());
const pathToJSONMaya = path.join(__dirname, "../data/characters/maya.json");
const fileMaya = JSON.parse(fs.readFileSync(pathToJSONMaya).toString());
const pathToJSONHero = path.join(__dirname, "../data/characters/hero.json");
const fileHero = JSON.parse(fs.readFileSync(pathToJSONHero).toString());
const pathToJSONPsaro = path.join(__dirname, "../data/characters/psaro.json");
const filePsaro = JSON.parse(fs.readFileSync(pathToJSONPsaro).toString());

const file = [
  fileRagnar,
  fileAlena,
  fileKyril,
  fileBorya,
  fileTorneko,
  fileMeena,
  fileMaya,
  fileHero,
  filePsaro,
];

const router = express.Router();

router.get("/", (req, res) => {
  try {
    const response = file.sort((a, b) => a.id - b.id);
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/?id=:id&name=:name", (req, res) => {
  try {
    let tmp = file;
    if (req.query.id < 1) throw new Error("id cannot be inferior than 1");
    if (req.query.id > file.length)
      throw new Error(`id cannot be superior than ${file.length}`);

    tmp = tmp.filter((data) => data.id == req.query.id);
    res.status(200).json(response);

    const response = file.filter((data, i) => i + 1 == req.params.name);
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
