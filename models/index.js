const Sequilize = require('sequelize');
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
require('dotenv').config();

const db = {};

const connection = {
  dialect: process.env.DIALECT,
  dialectModel: process.env.DIALECTMODEL,
  database: process.env.DATABASE_NAME,
  username: process.env.ADMIN_USERNAME,
  password: process.env.ADMIN_PASSWORD,
  host: process.env.HOST,
};

const sequilize = new Sequilize(connection);
db.sequelize = sequilize;

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') != 0 &&
      file != basename &&
      file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequilize,
      Sequilize
    );
    db[model.name] = model;
    console.log(db);
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
