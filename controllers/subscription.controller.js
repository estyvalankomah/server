const db = require("../models");
const Subscription = db.subscriptions;
const User = db.users;
const Op = db.Sequelize.Op;


// Create and Save a new Subscription
exports.create = (req, res) => {
  // Validate request
  if (!req.body.user_id) {
    res.status(400).send({
      message: "Contents can not be empty!"
    });
    return;
  }

  // Create a Subscription
  const subscription = {
    user_id: req.body.user_id,
    number_plate: req.body.number_plate,
    subscription_expiration: req.body.subscription_expiration
  };

  // Save Subscription in the database
  Subscription.create(subscription)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the subscription."
      });
    });
};

// Retrieve all Subscriptions from the database.
exports.findAll = (req, res) => {
  const user_id = req.query.user_id;
  var condition = user_id ? { user_id: { [Op.like]: `%${user_id}%` } } : null;

  Subscription.findAll({ where: condition })
    .then(data => {
      
      console.log(data[0])
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving subscriptions."
      });
    });

};

exports.findPlate = (req, res) => {
  const number_plate = req.query.number_plate;
  var condition = number_plate ? { number_plate: { [Op.like]: `%${number_plate}%` } } : null;

  Subscription.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving subscriptions."
      });
    });

};

// Find a single user with an number plate
exports.findUser = (req, res) => {
  const number_plate = req.params.number_plate;

  Subscription.findOne({
    where: {
      number_plate : number_plate
    },
    include: User
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving user with user ID = " + user_id
      });
    })
};


// Find a single Subscription with an id
// exports.findOne = (req, res) => {
//   const subscription_id = req.params.subscription_id;

//   Subscription.findByPk(subscription_id)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error retrieving Subscription with subscription ID = " + subscription_id
//       });
//     })
// };

// Delete a Subscription with the specified id in the request
exports.delete = (req, res) => {
  const subscription_id = req.params.subscription_id;

  Subscription.destroy({
    where: { subscription_id: subscription_id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Subscription was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete subscription with id=${subscription_id}. Maybe Subscription was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete subscription with id=" + subscription_id
      });
    });
};

// Delete all Subscriptions from the database.
exports.deleteAll = (req, res) => {
  Subscription.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Subscriptions were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Subscriptions."
      });
    });
};
