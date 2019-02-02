import { LitElement, html } from 'https://unpkg.com/lit-element/lit-element.js?module'

class Header extends LitElement {
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
    <link rel="stylesheet" href="./components/tp-header/style.css">
      <header class='header'>
          <button
            class='menu-button'
            @click="${() => this.open = !this.open}"
          >
          Menu
        </button>
      </header>
      <aside
        @click="${() => this.open = false}"
        class="side-nav ${this.open === true ? 'side-nav--open' : ''}"
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

customElements.define('tp-header', Header)
