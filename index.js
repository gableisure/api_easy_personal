const express = require("express");
const app = express();
const professores = require("./data/professores.json");
const alunos = require("./data/alunos.json");

const PORT = 8082;

app.get("/", (req, res) => res.send("Ok"));

app.get("/professores", (req, res) => res.json(professores));

app.get("/alunos", (req, res) => res.json(alunos));

app.listen(process.env.PORT || PORT, () => console.log("Server running on port " + PORT));