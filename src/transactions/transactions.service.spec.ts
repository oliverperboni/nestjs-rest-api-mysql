import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsService } from './transactions.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Transaction } from './entities/transaction.entity';
import { EntityManager, Repository } from 'typeorm';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Category } from 'src/categories/entities/category.entity';

describe('TransactionsService', () => {
  let service: TransactionsService;
  let repo: Repository<Transaction>;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TransactionsService,
        {
          provide: getRepositoryToken(Transaction),
          useValue: {
            save: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            delete: jest.fn(),
          },
        },
        {
          provide: EntityManager,
          useValue: {},
        },
      ],
    }).compile();

    repo = module.get<Repository<Transaction>>(getRepositoryToken(Transaction));
    service = module.get<TransactionsService>(TransactionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should create a transaction', async () => {
    const createTransactionDto: CreateTransactionDto = {
      amount: 100,
      date: new Date(),
      description: 'Test transaction',
      category: new Category({}),
    };
    const repoSpy = jest.spyOn(repo, 'save');

    const result = await service.create(createTransactionDto);

    expect(repoSpy).toHaveBeenCalled();

    expect(result).toBe('This action adds a new transaction');
  });
});
