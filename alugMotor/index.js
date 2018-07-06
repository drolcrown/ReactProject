const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/Node', { useNewUrlParser: true });
require('./apartamento');

const Apartamento = mongoose.model('apartamento');

app.get('/apartamento/todos', async(req, res) =>{
    const todos = await Apartamento.find();

    return res.json(todos);
});

app.post('/apartamento/criar', async (req, res) => {
    const apts = await Apartamento.create(req.body);

    return res.json(apts);
});

app.post('/apartamento/buscar', async (req, res) => {
    const apts = await Apartamento.find(req.body);

    return res.json(apts);
});

console.log("Iniciando Servidor.....");
app.listen(3333);
console.log("Servidor iniciado");
