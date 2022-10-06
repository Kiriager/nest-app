import { Table, Column, Model, DataType } from 'sequelize-typescript';

interface NoteCreationAttrs {
  name: string,
  content: string,
  categoryId: number
}

// interface Category {
//   id: number,
//   title: string,
//   icon: string
// }

@Table
export class Note extends Model<Note, NoteCreationAttrs> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id:number;

  @Column({type: DataType.STRING, allowNull: false})
  name: string;

  @Column({type: DataType.STRING, allowNull: false})
  content: string;

  @Column({type: DataType.INTEGER, allowNull: false})
  categoryId: number;

  @Column({type: DataType.BOOLEAN, defaultValue: false})
  archived: boolean;
}