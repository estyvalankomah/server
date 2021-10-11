module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        user_id: {
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
        status: {
            type: Sequelize.STRING,
            allowNull:false
        },
        phone: {
          type: Sequelize.STRING,
          allowNull:false
        },
        email: {
            type: Sequelize.STRING
        },
        address: {
          type: Sequelize.STRING
        },
        subscription_expiration: {
          type: Sequelize.DATEONLY,
          allowNull:false
        }
    });
  
    return User;
};