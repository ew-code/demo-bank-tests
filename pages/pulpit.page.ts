import { Page } from '@playwright/test';

export class PulpitPage {
  constructor(private page: Page) {}
  transferReciver = this.page.locator('#widget_1_transfer_receiver');
  transferAmount = this.page.locator('#widget_1_transfer_amount');
  transferTitle = this.page.locator('#widget_1_transfer_title');

  topUpReciver = this.page.locator('#widget_1_topup_receiver');
  topUpAmount = this.page.locator('#widget_1_topup_amount');
  topupAgreement = this.page.locator('#uniform-widget_1_topup_agreement span');
  topUpButton = this.page.getByRole('button', { name: 'doładuj telefon' });

  // const initialBlance = await page.locator('#money_value').innerText()
  // const expectedBalance = Number(initialBlance) - Number(topUpAmount)

  executeButton = this.page.getByRole('button', { name: 'wykonaj' });
  closeButton = this.page.getByTestId('close-button');
}
