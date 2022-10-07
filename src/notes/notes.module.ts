import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from 'src/categories/categories.model';
import NotesController from './notes.controller';
import { Note } from './notes.model';
import NotesService from './notes.service';
 
@Module({
  imports: [SequelizeModule.forFeature([Note, Category])],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}