module.exports = app => {
    const reports = require("../controllers/report.controller.js");
    var router = require("express").Router();
  
    // Create a new report
    router.post("/", reports.create);
  
    // Retrieve all reports
    router.get("/", reports.findAll);
  
    // Retrieve a single report with id
    router.get("/:report_id", reports.findOne);
  
    app.use('/api/reports', router);
};