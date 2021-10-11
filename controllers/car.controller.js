const db = require("../models");
const Car = db.cars;
const Op = db.Sequelize.Op;


// Create and Save a new Car
exports.create = (req, res) => {
  // Validate request
  if (!req.body.number_plate) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Car
  const car = {
    number_plate: req.body.number_plate
  };

  // Save Car in the database
  Car.create(car)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Car."
      });
    });
};

// Retrieve all Cars from the database.
exports.findAll = (req, res) => {
  const number_plate = req.query.number_plate;
  var condition = number_plate ? { number_plate: { [Op.like]: `%${number_plate}%` } } : null;

  Car.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving cars."
      });
    });

};

// Find a single Car with an id
exports.findOne = (req, res) => {
  const car_id = req.params.car_id;

  Car.findByPk(car_id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Car with car ID = " + car_id
      });
    })
};

// Delete a Car with the specified id in the request
exports.delete = (req, res) => {
  const car_id = req.params.car_id;

  Car.destroy({
    where: { car_id: car_id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Car was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete car with id=${car_id}. Maybe car was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete car with id=" + car_id
      });
    });
};

// Delete all Cars from the database.
exports.deleteAll = (req, res) => {
  Car.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} cars were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all cars."
      });
    });
};
