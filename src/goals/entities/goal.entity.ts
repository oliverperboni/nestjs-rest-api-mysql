import { AbstractEntity } from 'src/database/abstract.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

export enum StatusEnum {
  ACTIVE = 'active',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}
@Entity()
export class Goal extends AbstractEntity<Goal> {
  @Column()
  name: string;

  @Column()
  target_amount: number;

  @Column()
  current_amount: number;

  @Column()
  target_date: Date;

  @Column()
  status: StatusEnum;

  @ManyToOne(() => User, (user) => user.id)
  user: User;
}
