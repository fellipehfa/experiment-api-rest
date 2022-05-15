import Sequelize, { Model } from 'sequelize';

export default class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        first_name: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'First name must be between 3 and 255 characters',
            },
          },
        },
        last_name: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Last name must be between 3 and 255 characters',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            isEmail: {
              msg: 'Email is required and must be a valid email',
            },
          },
        },
        age: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              args: [3, 255],
              msg: 'Age is required and must be a integer number',
            },
          },
        },
        weight: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isInt: {
              args: [3, 255],
              msg: 'Age is required and can be a float number',
            },
          },
        },
        height: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isInt: {
              args: [3, 255],
              msg: 'Age is required and can be a float number',
            },
          },
        },
        active: {
          type: Sequelize.BOOLEAN,
          defaultValue: true,
        },
      },
      {
        sequelize,
      },
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Picture, { foreignKey: 'student_id' });
  }
}
