const bodyParser = require("body-parser");
const express = require("express");
const Programmer = require("./programmer");
const database = require("./db");

const app = express();
app.use(bodyParser.json());
const port = 5000;

app.get("/syncDb", async (req, res) => {
  try {
    await database.sync();
    res.send("Connected!");
  } catch (err) {
    res.json(err);
  }
});

app.post("/", async (req, res) => {
  try {
    const data = req.body;

    await Programmer.create(data);
    res.send("Created!");
  } catch (err) {
    res.json(err);
  }
});

app.get("/", async (req, res) => {
  try {
    const arrayProgrammers = await Programmer.findAll();

    res.json(arrayProgrammers);
  } catch (err) {
    res.json(err);
  }
});

app.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const findId = await Programmer.findByPk(id);

    res.json(findId);
  } catch (err) {
    res.json(err);
  }
});

app.put("/:id", async (req, res) => {
  try {
    const data = req.body;
    const id = req.params.id;
    const findId = await Programmer.findByPk(id);

    await findId.update(data);

    res.json(findId);
  } catch (err) {
    res.json(err);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const findId = await Programmer.findByPk(id);

    await findId.destroy();

    res.json(findId);
  } catch (err) {
    res.json(err);
  }
});

app.listen(port);
