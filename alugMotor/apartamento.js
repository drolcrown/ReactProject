const mongoose = require('mongoose');

const apartamentoSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: false
    },
    preco:{
        type: Number,
        required: true
    },
    local: {
        type: String,
        required: false
    },
    descricao: {
        type: String,
        required: false
    },
    imagem: {
        type: String,
        required: false
    }
});

mongoose.model('apartamento', apartamentoSchema);