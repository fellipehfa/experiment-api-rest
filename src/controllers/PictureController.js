import multer from 'multer';
import multerConfig from '../config/multer';

import Picture from '../models/Picture';

const upload = multer(multerConfig).single('picture');

class PictureController {
  create(req, res) {
    return upload(req, res, async (err) => {
      if (err) res.status(400).json({ error: err.code });

      try {
        const { originalname, filename } = req.file;
        const { studentId } = req.body;

        const picture = await Picture.create({
          original_name: originalname,
          file_name: filename,
          student_id: studentId,
        });

        res.json(picture);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    });
  }
}

export default new PictureController();
