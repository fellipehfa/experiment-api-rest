import jwt from 'jsonwebtoken';
import User from '../models/User';

class AuthController {
  async session(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) return res.status(400).json({ error: 'Email and password are required' });

      const user = await User.findOne({ where: { email } });
      if (!user) return res.status(400).json({ error: 'User not found' });
      if (!(await user.checkPassword(password))) return res.status(400).json({ error: 'Password does not match' });

      const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRES });

      await User.update({ token }, { where: { id: user.id } });

      res.status(200).json({ token });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err });
    }
  }
}

export default new AuthController();
