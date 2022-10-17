const Sequelize = require('sequelize');

require('dotenv').config();

// Instantiates Sequelize with database parameters 
const sequelize = new Sequelize(
    process.env.SOCIAL_DB, process.env.POSTGRES_USERNAME, process.env.POSTGRES_PASSWORD,
    {
        host: process.env.DB_HOST, // Name or IP of MySQL server
        dialect: 'mysql', // Tells squelize that MySQL is used
        logging: false, // Disable logging; default: console.log
        pool: {
            max: 5, min: 0, acquire: 30000, idle: 10000
        },
        timezone: '+08:00'
    }
);
module.exports = sequelize;