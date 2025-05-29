const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 3000
const hostname = 'localhost'  // 127.0.0.1 -> ip do server

const conn = require('./db/conn')
const pedidoController = require('./controller/pedido.controller')

// ---------- config middleware -------------
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
// ------------------------------------------

app.post('/pedido', pedidoController.cadastrar)
app.get('/pedido', pedidoController.listar)
app.put('/pedido/:id', pedidoController.atualizar)
app.delete('/pedido/:id', pedidoController.apagar)

app.get('/', (req,res)=>{
    res.status(200).json({message: 'Aplicação rodando com sucesso!'})
})

// ------------------------------------------
conn.sync()
.then(()=>{
    app.listen(PORT,hostname, ()=>{
        console.log(`Servidor rodando em http://${hostname}:${PORT}`)
    })
})
.catch((err)=>{
    console.error('Erro de sincronização com o banco de dados!', err)
})
