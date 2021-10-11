module.exports = app => {
    const booths = require("../controllers/booth.controller.js");
  
    var router = require("express").Router();
  
    // Create a new booth
    router.post("/", booths.create);
  
    app.use('/api/booths', router);
};