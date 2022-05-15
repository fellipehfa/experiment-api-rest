import multer from 'multer';

import utils from '../utils/functions';

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') cb(new multer.MulterError('Invalid file type.'));

    cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/images/');
    },
    filename: (req, file, cb) => {
      const fileName = `${Date.now()}_${utils.slugify(file.originalname.split('.')[0])}.${file.originalname.split('.')[1]}`;
      cb(null, fileName);
    },
  }),
};
