const { Sequelize } = require("sequelize");

const dbConfig = {
  dialect: "postgres",
  database: "postgres",
  models: [__dirname + "/models"],
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
};

console.log(dbConfig);
module.exports = new Sequelize(dbConfig);