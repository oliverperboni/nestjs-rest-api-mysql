import { Account } from 'src/accounts/entities/account.entity';
import { Budget } from 'src/budgets/entities/budget.entity';
import { AbstractEntity } from 'src/database/abstract.entity';
import { Goal } from 'src/goals/entities/goal.entity';
import { Column, Entity, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class User extends AbstractEntity<User> {
  @Column()
  fullName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToOne(() => Account)
  accounts: Account;

  @OneToMany(() => Budget, (budget) => budget.user)
  budgets: Budget[];

  @OneToMany(() => Goal, (goal) => goal.user)
  goals: Goal[];
}
