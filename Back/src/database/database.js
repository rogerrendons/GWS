const Sequelize = require('sequelize');
//import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'gwsupport', // db name,
    'postgres', // username,
    'postgres',
    {
        host: 'localhost',
        dialect: 'postgres',
        timezone: "-04:00",
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        dialectOptions: {
            useUTC: false, // for reading from database
            options: {
                useUTC: false, // for reading from database
            },
        },
        timezone: "-05:00", //for writing to database
    },
);
sequelize
    .authenticate()
    .then(() => {
        console.log('conected');
    })
