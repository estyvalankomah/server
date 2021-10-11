const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.admins = require("./admin.model.js")(sequelize, Sequelize);
db.users = require("./user.model.js")(sequelize, Sequelize);
db.operators = require("./operator.model.js")(sequelize, Sequelize);
db.subscriptions = require("./subscription.model.js")(sequelize, Sequelize);
db.booths = require("./booth.model.js")(sequelize, Sequelize);
db.reports = require("./report.model.js")(sequelize, Sequelize);

db.booths.hasMany(db.reports, { foreignKey: "booth_id" });
db.users.hasMany(db.subscriptions, { foreignKey: "user_id" });


module.exports = db;