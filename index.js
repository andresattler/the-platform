import { LitElement, html } from 'https://unpkg.com/lit-element/lit-element.js?module'

import './components/my-element.js'
import './components/my-counter.js'
import './components/side-nav.js'

class MyApp extends LitElement {
  constructor() {
    super()
    this.customValue = 5
  }
  render() {
    return html`
    
    <my-counter
      @valueChange=${(e) => this.log(e)}
      .value="${this.customValue}">
    </my-counter>
    `
  }
  log(e) {
   console.log('new val:', e.detail)
  }
}

customElements.define('my-app', MyApp)
