import { Op } from 'sequelize';
import User from '../models/User';

class UsersController {
  async create(req, res) {
    try {
      const { name, email, password } = req.body;
      const newUser = req.body;

      await User.create(newUser);
      res.status(201).json(newUser);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: err });
    }
  }

  async list(req, res) {
    try {
      const { email } = req.query;
      if (email) {
        const users = await User.findAll({ where: { email: { [Op.like]: `%${email}%` } } });
        if (users.length === 0) return res.status(404).json({ error: 'User not found' });

        return res.status(200).json(users);
      }
      const users = await User.findAll();
      if (users.length === 0) return res.status(404).json({ error: 'User not found' });

      res.status(200).json(users);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: err });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) return res.status(404).json({ error: 'User not found' });

      res.status(200).json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: err });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ error: 'Id is required' });

      const user = await User.findByPk(id);
      if (!user) return res.status(404).json({ error: 'User not found' });

      const { name, email, password } = req.body;
      user.name = name !== undefined ? name : user.name;
      user.email = email !== undefined ? email : user.email;
      user.password = password !== undefined ? password : user.password;
      await user.save();

      res.status(200).json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: err });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ error: 'Id is required' });

      const user = await User.findByPk(id);
      if (!user) return res.status(404).json({ error: 'User not found' });

      await user.destroy();
      res.status(200).json({ message: 'User deleted' });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: err });
    }
  }
}

export default new UsersController();
