import { Router } from 'express';
import userController from '../controllers/UsersController';

const router = new Router();

router.post('/users', userController.create);
router.get('/users', userController.list);
router.get('/users/:id', userController.show);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);

export default router;
