import { Router } from 'express';
import pictureController from '../controllers/PictureController';
import auth from '../middlewares/auth';

const router = new Router();

router.post('/', auth, pictureController.create);
// router.get('/', auth, upload.single('picture'), pictureController.list);
// router.put('/:id', auth, pictureController.update);
// router.put('/deleteStudent/:id', auth, pictureController.softDelete);
// router.delete('/:id', auth, pictureController.delete);

export default router;
