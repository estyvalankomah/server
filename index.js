const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const  PORT = 8080;

var corsOptions = {
    origin: "http://localhost:8081"
  };

app.use(cors(corsOptions));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");

// require("./routes/car.route")(app);
require("./routes/user.route")(app);
require("./routes/booth.route")(app);
require('./routes/auth.route')(app);
require('./routes/roles.route')(app);
require('./routes/report.route')(app);
require('./routes/subscription.route')(app);

db.sequelize.sync().then(() => {
    console.log("Drop and re-sync db.");
});

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})



