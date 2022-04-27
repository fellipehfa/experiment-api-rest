import dotenv from 'dotenv';

dotenv.config();

import './src/database';
import express from 'express';
import home from './src/routes/homeRoutes';
import students from './src/routes/studentsRoutes';
import users from './src/routes/usersRoutes';

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
    this.app.use('/', home);
    this.app.use('/', students);
    this.app.use('/', users);
  }
}

export default new App().app;
