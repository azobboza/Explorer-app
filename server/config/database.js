const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/explorer")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));

exports.mongoose = mongoose;