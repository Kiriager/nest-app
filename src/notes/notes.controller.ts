import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import NotesService from './notes.service';
import { CreateNoteDto } from './dto/createNote.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Note } from './notes.model';
import { Category } from 'src/categories/categories.model';
import { categoryStatsDto } from './dto/stats.dto';


@ApiTags("Operations with notes")
@Controller('notes')
export default class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @ApiOperation({summary: "Creation of note."})
  @ApiResponse({status: 200, type: Note})
  @Post()
  async create(@Body() note: CreateNoteDto) {
    return this.notesService.createNote(note);
  }

  @ApiOperation({summary: "Getting all notes from database."})
  @ApiResponse({status: 200, type: [Note]})
  @Get()
  async getAll() {
    const notes = this.notesService.getAllNotes();
    return notes;
  }

  @ApiOperation({summary: "Getting statistics about notes according to categories."})
  @ApiResponse({status: 200, type: [categoryStatsDto]})
  @Get("/stats")
  async getStats() {
    const stats = this.notesService.getStats();
    return stats;
  }

  @ApiOperation({summary: "Get note by id."})
  @ApiResponse({status: 200, type: Note})
  @Get("/:id")
  async getById(@Param('id') id: number) {
    const category = this.notesService.getNoteById(Number(id));
    return category;
  }
 
  @ApiOperation({summary: "Delete note by id."})
  @ApiResponse({status: 200})
  @Delete('/:id')
  async deleteNote(@Param('id') id: string) {
    await this.notesService.deleteNoteById(Number(id));
  }
}