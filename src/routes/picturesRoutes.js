import { Router } from 'express';
import multer from 'multer';

import pictureController from '../controllers/PictureController';
import multerConfig from '../config/multer';

import auth from '../middlewares/auth';

const upload = multer(multerConfig);

const router = new Router();

router.post('/', auth, upload.single('picture'), pictureController.create);
// router.get('/', auth, upload.single('picture'), pictureController.list);
// router.put('/:id', auth, pictureController.update);
// router.put('/deleteStudent/:id', auth, pictureController.softDelete);
// router.delete('/:id', auth, pictureController.delete);

export default router;
