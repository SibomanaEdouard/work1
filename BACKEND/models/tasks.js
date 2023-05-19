const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  task: {
  }
});

module.exports = mongoose.model("Tasks", TaskSchema);
