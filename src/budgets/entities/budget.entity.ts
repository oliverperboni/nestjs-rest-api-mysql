import { AbstractEntity } from 'src/database/abstract.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

export enum BudgetPeriod {
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}

@Entity()
export class Budget extends AbstractEntity<Budget> {
  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @Column()
  amount: number;

  @Column({ type: 'enum', enum: BudgetPeriod, default: BudgetPeriod.MONTHLY })
  period: BudgetPeriod;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;
}
