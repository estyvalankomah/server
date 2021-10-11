module.exports = (sequelize, Sequelize) => {
    const Car = sequelize.define("car", {
      car_id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
      },
      number_plate: {
        type: Sequelize.STRING,
        unique: true,
        allowNull:false
      }
    });

    return Car;
};