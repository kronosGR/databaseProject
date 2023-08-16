module.exports = (sequelize, Sequilize) => {
  const User = sequelize.define(
    'User',
    {
      FirstName: Sequilize.DataTypes.STRING,
      LASTNAME: Sequilize.DataTypes.STRING,
    },
    { timestamps: false }
  );
  User.associate = function (models) {
    User.belongsToMany(models.Hotel, { through: models.Rate });
    User.belongsToMany(models.Room, { through: models.Reservation });
  };
  return User;
};
