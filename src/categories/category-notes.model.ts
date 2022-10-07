// import { ApiProperty } from '@nestjs/swagger';
// import { Table, Column, Model, DataType, BelongsToMany, ForeignKey } from 'sequelize-typescript';
// import { Note } from 'src/notes/notes.model';
// import { Category } from './categories.model';

// @Table({tableName: 'category_notes', createdAt: false, updatedAt: false})
// export class CategoryNotes extends Model<CategoryNotes> {
 
//   @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
//   id:number;

//   @ForeignKey(() => Note)
//   @Column({type: DataType.INTEGER})
//   noteId:number;

//   @ForeignKey(() => Category)
//   @Column({type: DataType.INTEGER})
//   categoryId:number;

// }