const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/db_test", {
  useNewUrlParser: true,
});

mongoose.connection
  .once("open", () => console.log("Connected to Mongodb"))
  .on("error", () => console.log("Error with the data base"));
