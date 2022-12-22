import { Router } from "express";

import HelloControler from "./controllers/HelloControler";

const routes = new Router();

routes.get('/hello', HelloControler.index);

export default routes;