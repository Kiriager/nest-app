import { Category } from "../../categories/categories.model";

export interface categoryStatsDto {
  category: Category,
  active: number,
  archived: number
}