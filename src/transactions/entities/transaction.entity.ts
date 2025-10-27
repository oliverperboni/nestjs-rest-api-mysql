import { Account } from 'src/accounts/entities/account.entity';
import { Category } from 'src/categories/entities/category.entity';
import { AbstractEntity } from 'src/database/abstract.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Transaction extends AbstractEntity<Transaction> {
  @Column()
  date: Date;

  @Column()
  amount: number;

  @Column()
  description: string;

  @ManyToOne(() => Category, (category) => category.transactions)
  category: Category;

  @ManyToOne(() => Account, (account) => account.transactions)
  account: Account;
}
