import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({example: 4, description: "Unique identifier"})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id:number;

  @ApiProperty({example: "Homework", description: "Title of note"})
  @Column({type: DataType.STRING, allowNull: false})
  name: string;

  @ApiProperty({example: "Complete task 1-6 till the end of the 06/10/2022", description: "General note information"})
  @Column({type: DataType.STRING, allowNull: false})
  content: string;

  @ApiProperty({example: 1, description: "Unique identifier of note category"})
  @Column({type: DataType.INTEGER, allowNull: false})
  categoryId: number;

  @ApiProperty({example: false, description: "Shows if note is active or archived (true means archived)"})
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  archived: boolean;
}