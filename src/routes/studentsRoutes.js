import { Router } from 'express';
import studentsController from '../controllers/StudentsController';
import auth from '../middlewares/auth';

const router = new Router();

router.post('/', auth, studentsController.create);
router.get('/', auth, studentsController.list);
router.put('/:id', auth, studentsController.update);
router.put('/deleteStudent/:id', auth, studentsController.softDelete);
router.delete('/:id', auth, studentsController.delete);

export default router;
