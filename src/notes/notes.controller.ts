import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import NotesService from './notes.service';
import { CreateNoteDto } from './dto/createNote.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Note } from './notes.model';
// import UpdateNoteDto from './dto/updateNote.dto';

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
  getAll() {
    const notes = this.notesService.getAllNotes();
    return notes;
  }
 
  // @Get(':id')
  // getNoteById(@Param('id') id: string) {
  //   return this.notesService.getNoteById(Number(id));
  // }
 
  
 
  // @Put(':id')
  // async replaceNote(@Param('id') id: string, @Body() note: UpdateNoteDto) {
  //   return this.notesService.replaceNote(Number(id), note);
  // }
 
  // @Delete(':id')
  // async deleteNote(@Param('id') id: string) {
  //   this.notesService.deleteNote(Number(id));
  // }
}