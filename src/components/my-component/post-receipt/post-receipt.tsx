import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'post-receipt',
  styleUrl: 'post-receipt.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  render() {
    return (
      <div class="post-receipt">
        <div class="slot">
          <div class="slot-line"></div>
        </div>
      </div>
    );
  }
}
