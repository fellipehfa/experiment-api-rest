import multer from 'multer';
import multerConfig from '../config/multer';

const upload = multer(multerConfig).single('picture');

class PictureController {
  async create(req, res) {
    return upload(req, res, async (err) => {
      if (err) res.status(400).json({ error: err.code });

      res.json(req.file);
    });
  }
}

export default new PictureController();
