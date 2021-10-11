const db = require("../models");
const config = require("../config/auth.config");
const Admin = db.admins;
const Operator = db.operators;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

exports.adminSignup = (req, res) => {
  // Save Admin to Database
  Admin.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10),
    phone_number: req.body.phone_number
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user."
      });
    });
};

exports.adminSignin = (req, res) => {
  Admin.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(admin => {
      if (!admin) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        admin.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ admin_id: admin.admin_id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      res.status(200).send({
        admin_id: admin.admin_id,
        username: admin.username,
        accessToken: token
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.operatorSignup = (req, res) => {
  // Save Operator to Database
  Operator.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10),
    assigned_booth: req.body.assigned_booth,
    phone_number: req.body.phone_number
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user."
      });
    });
};

exports.operatorSignin = (req, res) => {
  Operator.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(operator => {
      if (!operator) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        operator.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ operator_id: operator.operator_id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      res.status(200).send({
        operator_id: operator.operator_id,
        username: operator.username,
        accessToken: token
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};