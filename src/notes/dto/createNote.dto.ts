import { ApiProperty } from "@nestjs/swagger"

export class CreateNoteDto {
  @ApiProperty({example: "Homework", description: "Title of new note"})
  name: string;

  @ApiProperty({example: "Complete task 1-6 till the end of the 06/10/2022", description: "General note information"})
  content: string;

  @ApiProperty({example: 2, description: "Unique note category identifier, one of the predefined list."})
  categoryId: number
}