module.exports = app => {
    const subscriptions = require("../controllers/subscription.controller.js");
    var router = require("express").Router();
  
    // Create a new subscription
    router.post("/", subscriptions.create);
  
    // Retrieve all subscriptions
    router.get("/getPlates", subscriptions.findAll);

    // Retrieve subscription by plate
    router.get("/", subscriptions.findPlate);
  
    // Retrieve a single subscription with id
    // router.get("/:subscription_id", subscriptions.findOne);

    // Retrieve a single user with number plate
    router.get("/:number_plate", subscriptions.findUser);
  
    // Delete a subscription with id
    router.delete("/:subscription_id", subscriptions.delete);
  
    // Delete all subscriptions
    router.delete("/", subscriptions.deleteAll);
  
    app.use('/api/subscriptions', router);
};