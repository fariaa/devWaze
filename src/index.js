const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');

const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);
setupWebsocket(server);

mongoose.connect('blabla', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors({origin: 'http://localhost:3000'}))
app.use(express.json());
app.use(routes);

//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:

//Query Params: req.query (filtros, ordenação, paginação)
//Route Params: req.params (identificar um recurso de alteração e remoção)
//Body: request.body (dados para criação e alteração de um registro)

//mongodb+srv://<username>:<password>@cluster0-z0n2w.gcp.mongodb.net/test?retryWrites=true&w=majority


server.listen(3333);