const dbConfig = require("../config/dbConfig.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected...");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.experience = require("./experiencesModel.js")(sequelize, DataTypes);
db.education = require("./educationModel.js")(sequelize, DataTypes);
db.user = require("./user.model.js")(sequelize, DataTypes);
db.skill = require("./skillsModel.js")(sequelize, Sequelize);

db.sequelize.sync({ force: false, alter: true }).then(() => {
  console.log("Re-sync done!");
});

module.exports = db;