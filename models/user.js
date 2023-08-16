module.exports = (sequelize, Sequilize) => {
  const User = sequelize.define(
    'User',
    {
      FirstName: Sequilize.DataTypes.STRING,
      LASTNAME: Sequilize.DataTypes.STRING,
    },
    { timestamps: false }
  );
  return User;
};
