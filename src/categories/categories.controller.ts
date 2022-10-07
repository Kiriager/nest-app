import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateNoteDto } from 'src/notes/dto/createNote.dto';
import { Note } from 'src/notes/notes.model';
import NotesService from 'src/notes/notes.service';
import { Category } from './categories.model';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/createCategory.dto';

@ApiTags("Operations with categories")
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @ApiOperation({summary: "Creation of new category."})
  @ApiResponse({status: 200, type: Category})
  @Post()
  async create(@Body() category: CreateCategoryDto) {
    return this.categoriesService.createCategory(category);
  }

  @ApiOperation({summary: "Getting all categories from database."})
  @ApiResponse({status: 200, type: [Category]})
  @Get()
  getAll() {
    const categories = this.categoriesService.getAllCategories();
    return categories;
  }

  @ApiOperation({summary: "Get category by id."})
  @ApiResponse({status: 200, type: Category})
  @Get("/:id")
  getById(@Param('id') id: number) {
    const category = this.categoriesService.getCategoryById(id);
    return category;
  }


}
