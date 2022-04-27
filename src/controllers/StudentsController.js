import Student from '../models/Student';

class StudentsController {
  async create(req, res) {
    const newStudent = await Student.create({
      first_name: 'Fellipe',
      last_name: 'Andrade',
      email: 'fellipe@email.com',
      age: 29,
      weight: 100.0,
      height: 1.85,
    });

    await res.status(201).json(newStudent);
  }
}

export default new StudentsController();
