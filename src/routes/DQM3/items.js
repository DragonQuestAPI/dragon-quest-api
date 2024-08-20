const express = require("express");
const router = express.Router();

const model = require(`../../models/DQM3/items.js`);

router.get("/", async (req, res) => {
  try {
    const response = await model.findAll(req.query);
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const response = await model.findById(req.params.id);
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
