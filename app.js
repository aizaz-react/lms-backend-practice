const express = require("express");
const bodyParser = require("body-parser");
require("./models/db");
const studentsRoutes = require("./routes/studentRoutes");

const app = express();

const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require("cors")());
require("./prod")(app);
app.use("/api/students", studentsRoutes);

app.listen(PORT, () => console.log("listening on port " + PORT));
