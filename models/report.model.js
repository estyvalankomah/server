module.exports = (sequelize, Sequelize) => {
    const Report = sequelize.define("reports", {
      report_id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
      },
      report_date: {
        type: Sequelize.DATEONLY,
        allowNull:false
      },
      total_cars: {
          type: Sequelize.INTEGER,
          allowNull:false
      }
    });
  
    return Report;
};