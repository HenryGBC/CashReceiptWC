import { Component, Prop, h } from '@stencil/core';
import { Config } from '../../models/model';

@Component({
  tag: 'company-info',
})
export class CompanyInfo {
  /**
   * The first name
   */
  @Prop() config: Config;

  /**
   * The middle name
   */
  render() {
    return (
      <div class="company-info">
        <div class="company-name">
          <h1>Empresa</h1>
        </div>
        <p class="address">Calle 134 12312 # 12312</p>
        <p class="phone">
          <b>Tel:</b> 30431212322
        </p>
        <p class="id_value">
          <b>Nit:</b> 1231321321
        </p>
      </div>
    );
  }
}
