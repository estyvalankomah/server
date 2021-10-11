module.exports = (sequelize, Sequelize) => {
    const Subscription = sequelize.define("subscriptions", {
      subscription_id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
      },
      number_plate: {
        type: Sequelize.STRING,
        unique: true,
        allowNull:false
      },
      subscription_expiration: {
        type: Sequelize.DATEONLY,
        allowNull:false
      }
    });
  
    return Subscription;
  };