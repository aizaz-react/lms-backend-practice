const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
});

mongoose.connection
  .once("open", () => console.log("Connected to Mongodb"))
  .on("error", () => console.log("Error with the data base"));
