import { Component, Prop, h } from '@stencil/core';
import { Config } from '../../models/model';

@Component({
  tag: 'items-info',
})
export class ItemsInfo {
  /**
   * The first name
   */
  @Prop() config: Config;

  /**
   * The middle name
   */
  render() {
    return (
      <div class="items">
        <table>
          <thead>
            <tr>
              <th>Descripcion</th>
              <th>Cantidad</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Descripcion de un producto</td>
              <td>2</td>
              <td>170.000</td>
            </tr>
            <tr>
              <td>Descripcion de un producto</td>
              <td>2</td>
              <td>170.000</td>
            </tr>
            <tr>
              <td>Descripcion de un producto</td>
              <td>2</td>
              <td>2.170.000</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
