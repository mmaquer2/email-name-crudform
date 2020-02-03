const Sequelize = require('sequelize');
const db = require('../config/db_conn');

const user = db.define('user', {
  title: {
    type: Sequelize.STRING
  },
  contact_email: {
    type: Sequelize.STRING
  }
})

module.exports = UserInfo;