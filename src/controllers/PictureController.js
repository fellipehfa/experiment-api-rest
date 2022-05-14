class PictureController {
  async create(req, res) {
    const { file } = req;
    res.status(200).json({ file, message: 'Picture uploaded successfully!' });
  }
}

export default new PictureController();
