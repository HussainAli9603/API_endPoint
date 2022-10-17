const Sequelize = require('sequelize');
const db = require('../config/DBConfig');


const TenantProfile = db.define('Tenant_Profile',
    {
        tenant_name: { type: Sequelize.STRING(255) },
        address: { type: Sequelize.STRING(255) },
        city: { type: Sequelize.STRING(255) },
        state: { type: Sequelize.STRING(255) },
        country: { type: Sequelize.STRING(255) },
        zip_code: { type: Sequelize.STRING(255) },
        phone: { type: Sequelize.STRING(255) },
        web_url: { type: Sequelize.STRING(255) },
    });

module.exports = TenantProfile;