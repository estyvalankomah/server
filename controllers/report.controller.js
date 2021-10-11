const db = require("../models");
const Report = db.reports;
const Op = db.Sequelize.Op;


// Create and Save a new report
exports.create = (req, res) => {
  // Validate request
  if (!req.body.total_cars) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a report
  const report = {
    booth_id: req.body.booth_id,
    report_date: req.body.report_date,
    total_cars: req.body.total_cars
  };

  // Save report in the database
  Report.create(report)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the report."
      });
    });
};

// Retrieve all reports from the database.
exports.findAll = (req, res) => {
  const booth_id = req.query.booth_id;
  var condition = booth_id ? { booth_id: { [Op.like]: `%${booth_id}%` } } : null;

  Report.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving reports."
      });
    });

};

// Find a single Report with an id
exports.findOne = (req, res) => {
  const report_id = req.params.report_id;

  Report.findByPk(report_id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving report with ID = " + report_id
      });
    })
};


