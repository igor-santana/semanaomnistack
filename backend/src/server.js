const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express();

mongoose.connect("mongodb+srv://omnistack:omnistack@cursoomnisack-t9eu7.mongodb.net/semana09?retryWrites=true&w=majority", {
    useNewUrlParser : true,
    useUnifiedTopology : true
})

// GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros) ?filtro=valor
// req.params = Acessar route params (para edição, delete) /valor
// req.body = Acessar corpo da requisição (para criação ou edição de registros) - POST

app.use(express.json());
app.use(routes);

app.listen(3333);