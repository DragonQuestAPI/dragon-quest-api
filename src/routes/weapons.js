const express = require("express");
const fs = require("fs");
const path = require("path");

const pathToJSON = path.join(__dirname, "../data/weapons.json");
const file = JSON.parse(fs.readFileSync(pathToJSON).toString());

const router = express.Router();

router.get("/", (req, res) => {
  try {
    const response = file;
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/:id", (req, res) => {
  try {
    if (req.params.id < 1) throw new Error("id cannot be inferior than 1");
    if (req.params.id > file.length)
      throw new Error(`id cannot be superior than ${file.length}`);

    res.status(200).json(file.filter((data, i) => i + 1 == req.params.id));
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
