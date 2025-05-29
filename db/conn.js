const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('db_pedido','root','senai', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306'
})

sequelize.authenticate()
.then(()=>{
    console.log('Conexão realizada com sucesso!')
})
.catch((err)=>{
    console.error('Erro de conexão com o banco de dados!',err)
})

module.exports = sequelize