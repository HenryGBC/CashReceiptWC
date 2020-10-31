import { Component, Prop, h } from '@stencil/core';
import { Config } from '../../models/model';

@Component({
  tag: 'invoice-info',
})
export class InvoiceInfo {
  /**
   * The first name
   */
  @Prop() config: Config;

  /**
   * The middle name
   */
  render() {
    return (
      <div class="invoice-info">
        <p class="item">
          <b>Nro:</b> 12
        </p>
        <p class="item">
          <b>Fecha:</b> 23/09/2020
        </p>
      </div>
    );
  }
}
