import { Page } from '@playwright/test';

export class PaymentPage {
  constructor(private page: Page) {}

  tansferReciver = this.page.getByTestId('transfer_receiver');
  transferAccount = this.page.getByTestId('form_account_to');
  transferAmount = this.page.getByTestId('form_amount');

  makeTransfer = this.page.getByRole('button', { name: 'wykonaj przelew' });
  closeButton = this.page.getByTestId('close-button');
}
