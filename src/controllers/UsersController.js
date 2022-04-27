import User from '../models/User';

class UsersController {
  async create(req, res) {
    try {
      const { name, email, password } = req.body;
      const newUser = req.body;

      await User.create(newUser);
      res.status(201).json(newUser);
    } catch (err) {
      console.log(err.errors.map((e) => e.message));
      res.status(400).json({ error: err.errors.map((e) => e.message) });
    }
  }
}

export default new UsersController();
