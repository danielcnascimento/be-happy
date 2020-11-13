import Router from 'express';
import multer from 'multer';

import OrphanagesController from './controllers/orphanagesController';

import uploadConfig from './config/upload';


const routes = Router();
const upload = multer(uploadConfig);
//rotas da aplicação

// POST : CADASTRAR NOVOS ORFANATOS <OK>
// GET : LISTAR OS ORFANATOS CRIADOS <OK>

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;