module.exports = app => {
    const { verifySignUp } = require("../middleware");
    const controller = require("../controllers/auth.controller");

    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.post(
      "/api/auth/adminSignup",
      [
        verifySignUp.checkDuplicateUsername
      ],
      controller.adminSignup
    );
  
    app.post("/api/auth/adminSignin", controller.adminSignin);

    app.post(
        "/api/auth/operatorSignup",
        [
          verifySignUp.checkDuplicateUsername
        ],
        controller.operatorSignup
      );
    
      app.post("/api/auth/operatorSignin", controller.operatorSignin);
  };