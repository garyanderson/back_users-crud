const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   // En Mayúsculas y singular      // en minúsculas y singular
const User = sequelize.define('user', {
    // Definimos las columnas aquí
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING(100)
        // allowNull por defecto esta en true
    },
    email: {
        type: DataTypes.STRING(100)
        // allowNull por defecto esta en true
    },
    password: {
        type: DataTypes.STRING(100)
        // allowNull por defecto esta en true
    },
    birthday: {
        type: DataTypes.DATEONLY
        // allowNull por defecto esta en true
    }
}, {
    timestamps: false 

    
});

module.exports = User;