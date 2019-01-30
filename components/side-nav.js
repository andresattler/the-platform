import { LitElement, html } from 'https://unpkg.com/lit-element/lit-element.js?module'

class SideNav extends LitElement {
  static get properties() {
    return {
      open: { type: Boolean }
    }
  }

  constructor() {
    super()
  }

  render() {
    return html`
    <link rel="stylesheet" href="./components/side-nav.css">
      <button @click="${() => this.open = true}">
          Menu
      </button>

      <aside
        @click="${() => this.open = false}"
        class="side-nav ${this.open ? 'side-nav--open' : ''}"
      >
      <nav class="side-nav__container ${this.open ? 'side-nav__container--open' : ''}">
        <p>Test</p>
      </nav>
    </aside>
    `
  }

  _valueChanged() {
    this.dispatchEvent(new CustomEvent('valueChange', { detail: this.open }))
  }
}

customElements.define('side-nav', SideNav)
