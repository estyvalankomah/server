module.exports = (sequelize, Sequelize) => {
    const Operator = sequelize.define("operators", {
      operator_id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      username: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      password: {
        type: Sequelize.STRING,
        allowNull:false
      },
      assigned_booth: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      phone_number: {
        type: Sequelize.STRING
      }
    });
  
    return Operator;
  };