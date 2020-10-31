import { Component, Prop, Host, h } from '@stencil/core';
import { Config } from '../../models/model';

@Component({
  tag: 'cash-receipt',
  styleUrl: 'cash-receipt.scss',
})
export class CashReceipt {
  /**
   * The first name
   */
  @Prop() config: Config;

  /**
   * The middle name
   */
  render() {
    return (
      <Host class="cash-receipt">
        <div class="slot">
          <div class="slot-line"></div>
        </div>
        <div class="content-paper">
          <div class="paper">
            <company-info></company-info>
            <invoice-info></invoice-info>
            <customer-info></customer-info>
            <items-info></items-info>
            <total-info></total-info>
          </div>
          <div class="torn-paper"></div>
        </div>
      </Host>
    );
  }
}
