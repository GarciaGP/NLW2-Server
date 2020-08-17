import express, { json } from 'express';
import cors from 'cors';
import routes from './routes';

const app = express(); // Inicia aplicação

app.use(cors());

app.use(express.json()); // Faz conversão para o express entender json

app.use(routes);

app.listen(3333); // Ouve requisições http

// Body: dados
// Route: identifica qual recurso quer manipular
// Query params: Parâmetros de paginação, filtros, etc

// app.post('/users', (request, response) => {


//     console.log(request.params); // Recebe os parâmetros da requisição ex -> :id
//     console.log(request.query); // Recebe os parâmetros da requisição ex -> ?page=2
//     console.log(request.body); // Recebe o corpo da requisição

//     const users = [
//         { name: 'teste', age: 20 },
//         { name: 'teste2', age: 22 }
//     ];

//     return response.json(users);
// });

// localhost:3333

console.log("aaaa");