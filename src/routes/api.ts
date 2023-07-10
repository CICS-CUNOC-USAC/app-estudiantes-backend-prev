import { Router } from 'express';
import jetValidator from 'jet-validator';

import Paths from './constants/Paths';
import CursoController from '@src/controllers/CursoController';

// **** Variables **** //

const apiRouter = Router()

const cursoRouter = Router();

//Cursos Routes
cursoRouter.get("/", CursoController.getAll)

// Add UserRouter
apiRouter.use("/cursos", cursoRouter);


// **** Export default **** //

export default apiRouter;
