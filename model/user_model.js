const Sequelize = require('sequelize');
const db = require('../config/db_conn');

const user = db.define('workoutdata', {
  username: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
});

module.exports = user;