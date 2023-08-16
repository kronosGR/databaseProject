module.exports = (sequelize, Sequelize) => {
  const Reservation = sequelize(
    'Reservation',
    {
      StartDate: Sequelize.DataTypes.Date,
      EndDate: Sequelize.DataTypes.Date,
    },
    {
      timestamps: false,
    }
  );
  return Reservation;
};
