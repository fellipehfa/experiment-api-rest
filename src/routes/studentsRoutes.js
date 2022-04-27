import { Router } from 'express';
import studentsController from '../controllers/StudentsController';

const router = new Router();

router.get('/students', studentsController.create);

export default router;
