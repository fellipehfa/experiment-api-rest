import multer from 'multer';

import utils from '../utils/functions';

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      const fileName = `${Date.now()}-${utils.slugify(file.originalname.split('.')[0])}.${file.originalname.split('.')[1]}`;
      cb(null, fileName);
    },
  }),
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type.'), false);
    }
  },
};
