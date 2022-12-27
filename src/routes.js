import { Router } from "express";

import HelloControler from "./controllers/HelloControler";
import UsersController from "./controllers/UsersController";

const routes = new Router();

routes.get('/hello', HelloControler.index);

//RESTFul
routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.post('/users', UsersController.create);
routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.destroy);

export default routes;