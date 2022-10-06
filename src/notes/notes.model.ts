import { Table, Column, Model, DataType } from 'sequelize-typescript';

interface NoteCreationAttrs {
  name: string,
  content: string,
  // category: Category
}

@Table
export class Note extends Model<Note, NoteCreationAttrs> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id:number;

  @Column({type: DataType.STRING, allowNull: false})
  name: string;

  @Column({type: DataType.STRING, allowNull: false})
  content: string;

  // @Column
  // category: string;

  @Column({type: DataType.BOOLEAN, defaultValue: false})
  archived: boolean;
}