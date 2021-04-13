const Sequelize = require('sequelize');
const { sequelize } = require('../database/database');
const User = require('./User');

const Support = sequelize.define('supports', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_usr: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
    },
    supporter_id: {
        type: Sequelize.STRING
    },
    tittle: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING
    },
    user_priority: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.STRING,
        defaultValue: Sequelize.literal("NOW()"),
        allowNull: false
    },
    updatedAt: {
        type: Sequelize.STRING,
        defaultValue: Sequelize.literal("NOW()"),
        allowNull: false
    }
}, {
    timestamps: true
});
sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database & tables created!');
  });

module.exports = Support;
// export default Support;