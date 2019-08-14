
const { mongoose } = require("../config/database");

const DataSchema = new mongoose.Schema({
  address: String,
  blockNumber: Number,
  from: String,
  to: String,
  eth: Number,
  date: { type: Date, default: Date.now }
});

const Data = mongoose.model("Data", DataSchema);

exports.Data = Data;