import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from 'src/categories/categories.model';
import { CategoriesService } from 'src/categories/categories.service';
import { CreateNoteDto } from './dto/createNote.dto';
import { categoryStatsDto } from './dto/stats.dto';
import { Note } from './notes.model';
// import UpdateNoteDto from './dto/updateNote.dto';

@Injectable()
export default class NotesService {

  constructor(@InjectModel(Note) private noteRepository: typeof Note,
    private categoriesService: CategoriesService) { }

  async createNote(dto: CreateNoteDto) {
    const note = await this.noteRepository.create(dto)
    const category = await this.categoriesService.getCategoryById(dto.categoryId)
    await note.$set('category', category.id)
    return note;
  }

  async getAllNotes() {
    const notes = await this.noteRepository.findAll({ include: { all: true } })
    return notes
  }

  async getNoteById(id: number) {
    const note = await this.noteRepository.findOne({ where: { id } })
    return note
  }

  async deleteNoteById(id: number) {
    const note = await this.noteRepository.findOne({ where: { id } })
    await note.destroy()
  }

  async getStats() {
    const categories = await this.categoriesService.getAllCategories()
    const notes = await this.noteRepository.findAll()

    let stats = categories.map((c) => {
      return getCategoryStats(notes, c)
    })
    return stats;
  }
}

function getCategoryStats(notes: Note[], category: Category): categoryStatsDto {
  let categoryStats = { category: category, active: 0, archived: 0 }
  notes.forEach(note => {
    if (note.categoryId === category.id) {
      if (note.archived) {
        categoryStats.archived++
      } else {
        categoryStats.active++
      }
    }
  })
  return categoryStats
}