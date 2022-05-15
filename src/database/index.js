import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import Student from '../models/Student';
import User from '../models/User';
import Picture from '../models/Picture';

const models = [Student, User, Picture];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
