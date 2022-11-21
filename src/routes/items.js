const express = require("express");
const fs = require("fs");
const path = require("path");

const pathItemsJSON = path.join(__dirname, "../data/items.json");
const items = JSON.parse(fs.readFileSync(pathItemsJSON).toString());

const router = express.Router();

router.get("/", (req, res) => {
  try {


    const response = items.map((item) => {
      item.slug = "test";
      item.zone = item.zone.map((zone) => {
        zone = zone.toLowerCase();
        console.log(zone);
        return zone;
      });
      return item;
    });
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/:slug", (req, res) => {
  try {
    if (req.params.id < 1) throw new Error("item id cannot be inferior than 1");
    if (req.params.id > items.length)
      throw new Error(`item id cannot be superior than ${items.length}`);

    res
      .status(200)
      .json(items.filter((item, index) => index + 1 == req.params.id));
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
