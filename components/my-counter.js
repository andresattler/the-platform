import { LitElement, html } from 'https://unpkg.com/lit-element/lit-element.js?module'

class Counter extends LitElement {
  static get properties() {
    return {
      value: { type: Number }
    }
  }

  constructor() {
    super()
    this.value = 0
  }

  render() {
    return html`
    <button @click="${() => this.decrement()}">-</button>
      <p>${this.value}</p>
    <button @click="${() => this.increment()}">+</button>
    `
  }

  decrement() {
    this.value--
    this._valueChanged()
  }

  increment() {
    this.value++
    this._valueChanged()
  }
  _valueChanged() {
    this.dispatchEvent(new CustomEvent('valueChange', { detail: this.value }))
  }
}

customElements.define('my-counter', Counter)
