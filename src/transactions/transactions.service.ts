import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { EntityManager, Repository } from 'typeorm';
import { Transaction } from './entities/transaction.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createTransactionDto: CreateTransactionDto) {
    const transaction = new Transaction(createTransactionDto);
    await this.transactionRepository.save(transaction);
    return 'This action adds a new transaction';
  }

  async findAll() {
    return this.transactionRepository.find();
  }

  async findOne(id: string) {
    return this.transactionRepository.findOneBy({ id });
  }

  async update(id: string, updateTransactionDto: UpdateTransactionDto) {
    const transaction = await this.transactionRepository.findOneBy({ id });

    if (!transaction) {
      return `Transaction with id ${id} not found`;
    }

    transaction.amount = updateTransactionDto.amount ?? transaction.amount;
    transaction.date = updateTransactionDto.date ?? transaction.date;
    transaction.description =
      updateTransactionDto.description ?? transaction.description;

    await this.entityManager.save(transaction);

    return `This action updates a #${id} transaction `;
  }

  async remove(id: number) {
    return await this.transactionRepository.delete(id);
  }
}
