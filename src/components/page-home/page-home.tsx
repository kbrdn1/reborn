import { Component, Host, h, Prop } from '@stencil/core';
import { injectHistory, RouterHistory } from '@stencil/router';

@Component({
  tag: 'page-home',
  shadow: true,
})
export class PageHome {
  @Prop() history: RouterHistory;

  render() {
    return (
      <Host>
        <button onClick={() => this.history.push('/404')}>Go to 404</button>
      </Host>
    );
  }

}

injectHistory(PageHome)