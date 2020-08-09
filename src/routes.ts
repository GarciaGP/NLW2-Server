import express, { request, response } from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';


const routes = express.Router(); // Método de roteamento do express
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();


routes.get('/', (request, response) => {
    return response.json({ message: 'Oie' });
})

// Rotas das aulas
routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);

// Rotas de conexão
routes.post('/connections', connectionsController.create)
routes.get('/connections', connectionsController.index)



export default routes;