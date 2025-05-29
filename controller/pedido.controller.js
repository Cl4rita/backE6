const Pedido = require('../model/Pedido')

const cadastrar = async (req,res)=>{
    const dados = req.body
    console.log(dados)
    try{
        const valores = await Pedido.create(dados)
        res.status(201).json(valores)
    }catch(err){
        console.error('Erro ao cadastrar os dados',err)
        res.status(500).json({message: 'Erro ao cadastrar os dados'})
    }
}
const listar = async (req,res)=>{
    try{
        const valores = await Pedido.findAll()
        if(valores){
            res.status(200).json(valores)
            console.log(valores)
        }else{
            res.status(404).json({message: "Dados não encontrados"})
            console.log(valores)
        }
    }catch(err){
        console.error('Erro ao listar os dados',err)
        res.status(500).json({message: 'Erro ao listar os dados'})
    }
}
const atualizar = async (req,res)=>{
    const id = req.params.id
    const dados = req.body
    try{
        const valores = await Pedido.findByPk(id)
        if(valores === null){
            console.log(valores)
            res.status(404).json({message: "Dados não encontrados!"})
        }else{
            await Pedido.update(dados, {where: {id : id}})
            const valores = await Pedido.findByPk(id)
            res.status(200).json(valores)
        }
    }catch(err){
        console.error('Erro ao atualizar os dados',err)
        res.status(500).json({message: 'Erro ao atualizar os dados'})
    }
}
const apagar = async (req,res)=>{
    const id = req.params.id
    console.log(id)
    try{
        const valor = await Pedido.findByPk(id)
        if(valor === null){
            console.log(valor)
            res.status(404).json({message: "Dados não encontrados!"})
        }else{
            await Pedido.destroy({where: {id : id}})
            res.status(200).json({message: "Dados Excluídos!"})
        }
    }catch(err){
        console.error('Erro ao atualizar os dados',err)
        res.status(500).json({message: 'Erro ao atualizar os dados'})
    }
}

module.exports = { cadastrar, listar, atualizar, apagar }