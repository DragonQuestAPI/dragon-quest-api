const express = require("express");
const app = express();
const fs = require("fs"); // File system
const path = require("path");
require("dotenv").config();

const pathMonstersJSON = path.join(__dirname, "/data/monsters.json");
const monsters = JSON.parse(fs.readFileSync(pathMonstersJSON).toString());

const pathItemsJSON = path.join(__dirname, "/data/items.json");
const items = JSON.parse(fs.readFileSync(pathItemsJSON).toString());

app.use(express.json());

app.get("/items", (req, res) => {
	res.json(items);
});
app.get("/items/:id", (req, res) => {
	res.json(items.filter(item => item.id == req.params.id));
});
app.get("/items/price/:price", (req, res) => {
	res.json(items.filter(item => item.price.buy == parseInt(req.params.price)));
});
app.get("/items/price/min/:price", (req, res) => {
	res.json(items.filter(item => item.price.buy >= parseInt(req.params.price)));
});
app.get("/items/price/max/:price", (req, res) => {
	res.json(items.filter(item => item.price.buy <= parseInt(req.params.price)));
});

app.get("/monsters", (req, res) => {
	res.json(monsters);
});
app.get("/monsters/:id", (req, res) => {
	res.json(monsters.filter(monster => monster.id == req.params.id));
});

app.listen(process.env.PORT, () => console.log(`Server started on http://localhost:${process.env.PORT}`));
