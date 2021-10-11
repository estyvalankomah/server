const db = require("../models");
const Admin = db.admins;
const Operator = db.operators;

checkDuplicateUsername = (req, res, next) => {
  // Username
  if(req.body.role === "admin"){
    Admin.findOne({
      where: {
        username: req.body.username
      }
    }).then(admin => {
      if (admin) {
        res.status(400).send({
          message: "Failed! Username is already in use!"
        });
        return;
      }
  
      next();
    });
  }else{
    Operator.findOne({
      where: {
        username: req.body.username
      }
    }).then(operator => {
      if (operator) {
        res.status(400).send({
          message: "Failed! Username is already in use!"
        });
        return;
      }
  
      next();
    });
  }
}
  

const verifySignUp = {
  checkDuplicateUsername: checkDuplicateUsername
};

module.exports = verifySignUp;