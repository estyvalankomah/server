module.exports = app => {
    const cars = require("../controllers/car.controller.js");
    var router = require("express").Router();
  
    // Create a new car
    router.post("/", cars.create);
  
    // Retrieve all cars
    router.get("/", cars.findAll);
  
    // Retrieve a single car with id
    router.get("/:car_id", cars.findOne);
  
    // Delete a car with id
    router.delete("/:car_id", cars.delete);
  
    // Delete all cars
    router.delete("/", cars.deleteAll);
  
    app.use('/api/cars', router);
};