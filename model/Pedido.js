const { DataTypes }= require('sequelize')
const db = require('../db/conn')

const Pedido = db.define('pedido',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    numPedido: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    nomeProduto: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    quant: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    unitario: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
},{
    timestamps: false
})

module.exports = Pedido