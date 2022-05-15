import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/app';

export default class Picture extends Model {
  static init(sequelize) {
    super.init(
      {
        original_name: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Field "original_name" is required',
            },
          },
        },
        file_name: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Field "file_name" is required',
            },
          },
        },
        active: {
          type: Sequelize.BOOLEAN,
          defaultValue: true,
        },
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${appConfig.url}/images/${this.file_name}`;
          },
        },
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Picture, { foreignKey: 'student_id' });
  }
}
