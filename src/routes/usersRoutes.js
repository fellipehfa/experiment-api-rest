import { Router } from 'express';
import userController from '../controllers/UsersController';

const router = new Router();

router.post('/users', userController.create);

export default router;
