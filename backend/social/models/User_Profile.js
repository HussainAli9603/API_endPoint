const Sequelize = require('sequelize');
const db = require('../config/DBConfig');


const UserProfile = db.define('User_Profile',
    {
        first_name: { type: Sequelize.STRING(255) },
        last_name: { type: Sequelize.STRING(255) },
        depertment: { type: Sequelize.STRING(255) },
        designation: { type: Sequelize.STRING(255) },
        tenant_id: { type: Sequelize.INT },
        image_url: { type: Sequelize.STRING(255) },
        city: { type: Sequelize.FLOAT(255) },
        bio: { type: Sequelize.STRING(255) },
        country: { type: Sequelize.STRING(255) },
        social_link: { type: Sequelize.STRING(255) },
        employee_id: { type: Sequelize.INT(255) }
    });

module.exports = UserProfile;