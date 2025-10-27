import { AbstractEntity } from 'src/database/abstract.entity';
import { Transaction } from 'src/transactions/entities/transaction.entity';
import { Column, Entity, OneToMany } from 'typeorm';

export enum CategoryType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

@Entity()
export class Category extends AbstractEntity<Category> {
  @Column()
  name: string;

  @Column({ type: 'enum', enum: CategoryType, default: CategoryType.EXPENSE })
  type: CategoryType;

  @OneToMany(() => Transaction, (transaction) => transaction.category, {
    cascade: true,
  })
  transactions: Transaction[];
}
