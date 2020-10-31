import { Component, Prop, h } from '@stencil/core';
import { Config } from '../../models/model';

@Component({
  tag: 'customer-info',
})
export class CustomerInfo {
  /**
   * The first name
   */
  @Prop() config: Config;

  /**
   * The middle name
   */
  render() {
    return (
      <div class="customer-info">
        <p class="item">
          <b>Nombre:</b> Henry Gabriel Bravo Casanova
        </p>
        <p class="item">
          <b>Direccion:</b> Calle 134 A 12B 45 Apto 101
        </p>
      </div>
    );
  }
}
