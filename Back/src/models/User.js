//const Sequelize = require('sequelize');
import Sequelize from 'sequelize';
const { sequelize } = require('../database/database');
const bcrypt = require("bcrypt");
//import { sequelize } from '../database/database';

const Support = require('./Support');

const User = sequelize.define('users', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        field: 'id'
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    supporter: {
        type: Sequelize.BOOLEAN
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    hooks: {
        beforeCreate: (user) => {
            const salt = bcrypt.genSaltSync(10)
            user.password = bcrypt.hashSync(user.password, salt)
        }
    }
})
User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}

User.hasMany(Support, { foreingkey: 'id_usr', sourceKey: 'id' });
Support.belongsTo(User, { foreingkey: 'id_usr', sourceKey: 'id' });

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database & tables created!');
  });
module.exports = User;