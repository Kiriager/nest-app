import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { InferAttributes, InferCreationAttributes } from 'sequelize/types';

@Table
export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  @ApiProperty({example: 1, description: "Unique identifier"})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column
  public name: string;

  @Column 
  private email: string;

  @Column
  private password: string;
}