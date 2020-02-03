    
const Sequelize = require('sequelize');

    //sequelize arguements database name/ owner/password

module.exports =  new Sequelize('codegig', 'postgres', '123456', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
