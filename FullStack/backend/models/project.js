const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
    {
      naam: String,
      Description: String,
      timestamp: Date, 
      url: String

    },
  );
  

module.exports = mongoose.model("Project", ProjectSchema);