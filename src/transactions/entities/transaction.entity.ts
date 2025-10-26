import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  amount: number;

  @Column()
  description: string;

  @Column()
  category: 'essentials' | 'leisure' | 'savings' | 'investments';

  constructor(transaction: Partial<Transaction>) {
    Object.assign(this, transaction);
  }
}
