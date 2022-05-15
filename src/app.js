import dotenv from 'dotenv';

dotenv.config();

import './database';
import express from 'express';
import studentsRoutes from './routes/studentsRoutes';
import usersRoutes from './routes/usersRoutes';
import picturesRoutes from './routes/picturesRoutes';
import authRoutes from './routes/authRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static('../uploads'));
  }

  routes() {
    this.app.use('/', (req, res) => res.send('Hello World'));
    this.app.use('/students', studentsRoutes);
    this.app.use('/users', usersRoutes);
    this.app.use('/pictures', picturesRoutes);
    this.app.use('/auth', authRoutes);
  }
}

export default new App().app;
