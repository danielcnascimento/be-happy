import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors'; // -> esse pacote deve estar nessa ordem quando for importar no server

import './database/connection'; // -> mantem a conexão do banco de dados -> database
import routes from './routes'; //-> importa o routes para chamada do MVC
import errorHandler from './errors/handler'; //-> importa a nossa pasta que trata erros durante a conexão/requisção

//chama a aplicação

const app = express();

app.use(express.json()); // default
app.use(cors()); // permite que ambientes de diferentes dominios façam requisições oo node (nossa API RESTful)
app.use(routes); // faz requisição as rotas, e de lá podemos acessar o MVC
app.use('/upload', express.static(path.join(__dirname,'..', 'uploads')));
app.use(errorHandler);
app.listen(3333); // default

// para entendimento -> 

// REQUEST / RESPONSE (express ajuda na requisição e resposta de dados)
// Node sera a parte no backend que cuidara das request que o front faz e response,
// com a formatação correta que o frontend ja espera

//Rota : conjunto
//Recurso : users

//Metodos : HTTP = GET POST PUT DELETE
//Parametros 

//valores semanticos da url:
//GET : quando quero LER uma informação (ID, lista, usuario)
//POST : quando quero CRIAR uma informação (criar um novo usuario)
//PUT : quando quero ALTERAR uma informação (alterar nome de usuario)
//DELETE : quando quero DELETAR um informação (deltetar usuario)

//parametros = Query, Routes, Body

//Query = http://localhost:3333/users?search=daniel
//Route = http://localhost:3333/users/1 (Identificar um rescursos)
//Body = http://localhost:3333/users (Serve para enviar uma grande qtd de informações, geralmente em formulários)


//auxilia as rotas


