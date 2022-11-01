import { DataTypes } from 'sequelize';
import { Column, Model, Table } from 'sequelize-typescript';

@Table
export default class BlogModel extends Model {
  @Column({ type: DataTypes.STRING })
  title: string;

  @Column({ type: DataTypes.STRING(512) })
  description: string;

  @Column({ type: DataTypes.STRING(512) })
  name: string;
}
