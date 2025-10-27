import { Category } from 'src/categories/entities/category.entity';

export class CreateTransactionDto {
  readonly amount: number;
  readonly date: Date;
  readonly description: string;
  readonly category: Category;
}
