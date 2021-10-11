module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new booth
    router.post("/", users.create);

    // Retrieve all users
    router.get("/", users.findAll);
  
    // Retrieve a single user with id
    router.get("/:user_id", users.findOne);
  
    // Update a user with id
    router.put("/:user_id", users.update);
  
    // Delete a user with id
    router.delete("/:user_id", users.delete);
  
    // Delete all users
    router.delete("/", users.deleteAll);
  
    app.use('/api/users', router);
};