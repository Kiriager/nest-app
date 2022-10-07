import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from 'src/categories/categories.model';
import { CategoriesModule } from 'src/categories/categories.module';
import { CategoriesService } from 'src/categories/categories.service';
import NotesController from './notes.controller';
import { Note } from './notes.model';
import NotesService from './notes.service';
 
@Module({
  imports: [
    SequelizeModule.forFeature([Note, Category]),
    CategoriesModule
  ],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}