import { Op } from 'sequelize';
import Student from '../models/Student';
import User from '../models/User';
import Picture from '../models/Picture';

class StudentsController {
  async create(req, res) {
    try {
      const newStudent = req.body;

      await Student.create(newStudent);
      res.status(201).json(newStudent);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: err });
    }
  }

  async list(req, res) {
    try {
      const { lastName, email } = req.query;
      const format = {
        order: ['first_name', 'last_name', [Picture, 'id', 'DESC']],
        include: {
          model: Picture,
          attributes: ['id', 'file_name', 'original_name', 'url'],
        },
      };

      if (email) {
        const students = await Student.findAll({ where: { email: { [Op.like]: `%${email}%` } } });
        if (students.length === 0) return res.status(404).json({ error: 'Student not found' });

        return res.status(200).json(students);
      }
      if (lastName) {
        const students = await Student.findAll({ where: { last_name: { [Op.like]: `%${lastName}%` } } });
        if (students.length === 0) return res.status(404).json({ error: 'Student not found' });

        return res.status(200).json(students);
      }
      const students = await Student.findAll(format);
      if (students.length === 0) return res.status(404).json({ error: 'Student not found' });

      res.status(200).json(students);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: err });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ error: 'Id is required' });

      const { firstName, lastName, email, age, weight, height } = req.body;
      const student = await Student.findByPk(id);
      if (!student) return res.status(404).json({ error: 'Student not found' });

      student.first_name = firstName !== undefined ? firstName : student.first_name;
      student.last_name = lastName !== undefined ? lastName : student.last_name;
      student.email = email !== undefined ? email : student.email;
      student.age = age !== undefined ? age : student.age;
      student.weight = weight !== undefined ? weight : student.weight;
      student.height = height !== undefined ? height : student.height;
      await student.save();

      res.status(200).json(student);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: err });
    }
  }

  async softDelete(req, res) {
    try {
      const { id } = req.params;
      const { authorization } = req.headers;
      const { password, userId } = req.body;

      if (!id) return res.status(400).json({ error: 'Id is required' });

      const student = await Student.findByPk(id);
      if (!student) return res.status(404).json({ error: 'Student not found' });

      const user = await User.findByPk(userId);
      if (!(await user.checkPassword(password))) return res.status(400).json({ error: 'Password does not match' });

      if (authorization !== `Bearer ${user.token}`) return res.status(401).json({ error: 'Token invalid' });

      await Student.update({ active: false }, { where: { id: student.id } });

      res.status(200).json({ message: 'Student inactivated' });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: err });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const { authorization } = req.headers;
      const { password, userId } = req.body;

      if (!id) return res.status(400).json({ error: 'Id is required' });

      const user = await User.findByPk(userId);
      if (!(await user.checkPassword(password))) return res.status(400).json({ error: 'Password does not match' });

      if (authorization !== `Bearer ${user.token}`) return res.status(401).json({ error: 'Token invalid' });

      const student = await Student.findByPk(id);
      if (!student) return res.status(404).json({ error: 'Student not found' });

      await student.destroy();
      res.status(200).json({ message: 'Student deleted' });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: err });
    }
  }
}

export default new StudentsController();
