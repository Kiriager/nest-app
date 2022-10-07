import { ApiProperty } from '@nestjs/swagger';
import { Table, Column, Model, DataType, BelongsToMany, ForeignKey, HasMany } from 'sequelize-typescript';
import { Note } from 'src/notes/notes.model';

interface CategoryCreationAttrs {
  title: string,
  iconFA: string
}

@Table
export class Category extends Model<Category, CategoryCreationAttrs> {
  @ApiProperty({example: 1, description: "Unique identifier"})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id:number;

  @ApiProperty({example: "Random Thought", description: "Title of note category"})
  @Column({type: DataType.STRING, allowNull: false, unique: true})
  title: string;

  @ApiProperty({example: "fa-solid fa-lightbulb", description: "Font Awesome library icon snippet"})
  @Column({type: DataType.STRING, allowNull: false})
  iconFA: string;

  @HasMany(() => Note)
  notes: Note[];
}