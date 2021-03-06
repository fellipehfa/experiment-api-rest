import { Op } from 'sequelize';
import User from '../models/User';

class UsersController {
  async create(req, res) {
    try {
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
        const users = await User.findAll({ attributes: ['id', 'name', 'email'] }, { where: { email: { [Op.like]: `%${email}%` } } });
        if (users.length === 0) return res.status(404).json({ error: 'User not found' });

        return res.status(200).json(users);
      }
      const users = await User.findAll({ attributes: ['id', 'name', 'email'] });
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
      const { authorization } = req.headers;
      const user = await User.findByPk(id);
      if (!user) return res.status(404).json({ error: 'User not found' });

      if (authorization !== `Bearer ${user.token}`) return res.status(401).json({ error: 'Token invalid' });

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

      const { name, email, password } = req.body;
      const user = await User.findByPk(id);
      if (!user) return res.status(404).json({ error: 'User not found' });

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

  async softDelete(req, res) {
    try {
      const { id } = req.params;
      const { authorization } = req.headers;
      const { password } = req.body;

      if (!id) return res.status(400).json({ error: 'Id is required' });

      const user = await User.findByPk(id);
      if (!user) return res.status(404).json({ error: 'User not found' });
      if (!(await user.checkPassword(password))) return res.status(400).json({ error: 'Password does not match' });

      if (authorization !== `Bearer ${user.token}`) return res.status(401).json({ error: 'Token invalid' });

      await User.update({ active: false }, { where: { id: user.id } });

      res.status(200).json({ message: 'User inactivated' });
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
