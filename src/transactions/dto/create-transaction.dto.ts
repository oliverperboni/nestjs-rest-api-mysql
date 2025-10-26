export class CreateTransactionDto {
  readonly amount: number;
  readonly date: Date;
  readonly description: string;
  readonly category: 'essentials' | 'leisure' | 'savings' | 'investments';
}
