import { Page } from '@playwright/test';

export class PaymentPage {
  constructor(private page: Page) {}

  tansferReciverInput = this.page.getByTestId('transfer_receiver');
  transferAccountInput = this.page.getByTestId('form_account_to');
  transferAmountInput = this.page.getByTestId('form_amount');

  transferButton = this.page.getByRole('button', { name: 'wykonaj przelew' });
  actionCloseButton = this.page.getByTestId('close-button');

  showMessages = this.page.locator('#show_messages');
}
