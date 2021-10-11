module.exports = (sequelize, Sequelize) => {
    const Booth = sequelize.define("booths", {
      booth_id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
      },
      booth_name: {
        type: Sequelize.STRING,
        allowNull:false
      }
    });
  
    return Booth;
};