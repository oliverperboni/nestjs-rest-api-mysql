import { AbstractEntity } from 'src/database/abstract.entity';
import { Transaction } from 'src/transactions/entities/transaction.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Account extends AbstractEntity<Account> {
  @Column()
  name: string;

  @Column()
  type: 'checking' | 'savings' | 'credit' | 'investment';

  @Column()
  balance: number;

  @Column()
  currency: string;

  @OneToMany(() => Transaction, (transaction) => transaction.account, {
    cascade: true,
  })
  transactions: Transaction[];
}
