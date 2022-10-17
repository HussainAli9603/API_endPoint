const mySQLDB = require('./DBConfig');
const TenantProfile = require('../models/Tenant_Profile');
const UserProfile = require('../models/User_Profile');

// If drop is true, all existing tables are dropped and recreated 
const setUpDB = (drop) => {
  mySQLDB.authenticate()
      .then(() => {
        console.log('Database connected');
       
        UserProfile.hasMany(TenantProfile);
        TenantProfile.belongsTo(UserProfile);

        mySQLDB.sync({
          force: drop
        });
      })
      .catch(err => console.log(err));
};

module.exports = {setUpDB};