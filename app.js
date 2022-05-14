import dotenv from 'dotenv';

dotenv.config();

import './src/database';
import express from 'express';
import studentsRoutes from './src/routes/studentsRoutes';
import usersRoutes from './src/routes/usersRoutes';
import picturesRoutes from './src/routes/picturesRoutes';
import authRoutes from './src/routes/authRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/students', studentsRoutes);
    this.app.use('/users', usersRoutes);
    this.app.use('/pictures', picturesRoutes);
    this.app.use('/auth', authRoutes);
  }
}

export default new App().app;
