const db = require("../models");
const Booth = db.booths;

// Create and Save a new Booth
exports.create = (req, res) => {
  // Validate request
  if (!req.body.booth_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Booth
  const booth = {
    booth_name: req.body.booth_name
  };

  // Save Booth in the database
  Booth.create(booth)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the booth."
      });
    });
};