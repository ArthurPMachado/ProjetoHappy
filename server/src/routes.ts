import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesController'; 

const routes = Router();

routes.get('/orphanages', OrphanagesController.readAll);
routes.get('/orphanages/:id', OrphanagesController.readOnly);
routes.post('/orphanages', OrphanagesController.create);

export default routes;