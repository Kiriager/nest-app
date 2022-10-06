import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import NotesService from './notes.service';
import { CreateNoteDto } from './dto/createNote.dto';
// import UpdateNoteDto from './dto/updateNote.dto';
 
@Controller('notes')
export default class NotesController {
  constructor(
    private readonly notesService: NotesService
  ) {}
 
  @Get()
  getNotes() {
    return this.notesService.getNotes();
  }
 
  // @Get(':id')
  // getNoteById(@Param('id') id: string) {
  //   return this.notesService.getNoteById(Number(id));
  // }
 
  // @Post()
  // async createNote(@Body() note: CreateNoteDto) {
  //   return this.notesService.createNote(note);
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