const express = require("express");
const app = express();
const professores = require("./data/professores.json")

const PORT = 8082;

app.get("/professores", (req, res) => {
    res.json(professores);
});

app.listen(PORT, () => console.log("Server running on port " + PORT));