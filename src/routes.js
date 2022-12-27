import { Router } from "express";

import HelloControler from "./controllers/HelloControler";
import UsersController from "./controllers/UsersController";

const routes = new Router();

routes.get('/hello', HelloControler.index);

//REST
routes.get('/users', UsersController.index);

export default routes;