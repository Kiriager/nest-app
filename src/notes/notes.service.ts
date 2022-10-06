import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateNoteDto } from './dto/createNote.dto';
import { Note } from './notes.model';
// import UpdateNoteDto from './dto/updateNote.dto';
 
@Injectable()
export default class NotesService {

  constructor(@InjectModel(Note) private noteRepository: typeof Note) {} 
 
  async createNote(dto: CreateNoteDto) {
    const note = await this.noteRepository.create(dto)
    return note;
  }

  async getAllNotes() {
    const notes = await this.noteRepository.findAll()
    return notes
  }

  // getAllNotes() {
  //   return this.notes;
  // }
 
  // getNoteById(id: number) {
  //   const note = this.notes.find(note => note.id === id);
  //   if (note) {
  //     return note;
  //   }
  //   throw new HttpException('Note not found', HttpStatus.NOT_FOUND);
  // }
 
  // replaceNote(id: number, note: UpdateNoteDto) {
  //   const noteIndex = this.notes.findIndex(note => note.id === id);
  //   if (noteIndex > -1) {
  //     this.notes[noteIndex] = note;
  //     return note;
  //   }
  //   throw new HttpException('Note not found', HttpStatus.NOT_FOUND);
  // }
 
  // createNote(note: CreateNoteDto) {
  //   const newNote = {
  //     id: ++this.lastNoteId,
  //     ...note
  //   }
  //   this.notes.push(newNote);
  //   return newNote;
  // }
 
  // deleteNote(id: number) {
  //   const noteIndex = this.notes.findIndex(note => note.id === id);
  //   if (noteIndex > -1) {
  //     this.notes.splice(noteIndex, 1);
  //   } else {
  //     throw new HttpException('Note not found', HttpStatus.NOT_FOUND);
  //   }
  // }
}