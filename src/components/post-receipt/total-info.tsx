import { Component, Prop, h } from '@stencil/core';
import { Config } from '../../models/model';

@Component({
  tag: 'total-info',
})
export class TotalInfo {
  /**
   * The first name
   */
  @Prop() config: Config;

  /**
   * The middle name
   */
  render() {
    return (
      <div class="total-items">
        <div class="item">
          <p>
            <b>Subtotal:</b>
          </p>
          <p>COP 2.440.000</p>
        </div>
        <div class="item">
          <p>
            <b>IVA:</b>
          </p>
          <p>COP 40.000</p>
        </div>
        <div class="item">
          <p>
            <b>Total:</b>
          </p>
          <p>COP 2.480.000</p>
        </div>
      </div>
    );
  }
}
