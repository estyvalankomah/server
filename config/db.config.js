module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "QueenofQueens@12",
    DB: "egate",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};