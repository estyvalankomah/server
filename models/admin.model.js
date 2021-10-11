module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define("admins", {
      admin_id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull:false
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
      phone_number: {
        type: Sequelize.STRING
      }
    });
  
    return Admin;
  };