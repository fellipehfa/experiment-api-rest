import { Router } from 'express';
import studentsController from '../controllers/StudentsController';

const router = new Router();

router.get('/', studentsController.create);

export default router;
