import { Router } from 'express';
import userController from '../controllers/UsersController';
import auth from '../middlewares/auth';

const router = new Router();

router.post('/', auth, userController.create);
router.get('/', auth, userController.list);
router.get('/:id', auth, userController.show);
router.put('/:id', auth, userController.update);
router.delete('/:id', auth, userController.delete);

export default router;
