import { ApiProperty } from "@nestjs/swagger"

export class CreateCategoryDto {
  @ApiProperty({example: "Random Thought", description: "Title of note category"})
  title: string;

  @ApiProperty({example: "fa-solid fa-lightbulb", description: "Font Awesome library icon snippet"})
  iconFA: string;
}