import { Page } from '@playwright/test';
import { SideMenuComponent } from '../components/side-menu.components';

export class PaymentPage {
  constructor(private page: Page) {}

  sideMenu = new SideMenuComponent(this.page);

  tansferReciverInput = this.page.getByTestId('transfer_receiver');
  transferAccountInput = this.page.getByTestId('form_account_to');
  transferAmountInput = this.page.getByTestId('form_amount');

  transferButton = this.page.getByRole('button', { name: 'wykonaj przelew' });
  actionCloseButton = this.page.getByTestId('close-button');

  messageText = this.page.locator('#show_messages');

  async makeTransfer(
    tansferReciver: string,
    transferAccount: string,
    transferAmount: string,
  ): Promise<void> {
    await this.tansferReciverInput.fill(tansferReciver);
    await this.transferAccountInput.fill(transferAccount);
    await this.transferAmountInput.fill(transferAmount);
    await this.transferButton.click();
    await this.actionCloseButton.click();
  }
}
