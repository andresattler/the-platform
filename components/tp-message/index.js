import { LitElement, html } from 'https://unpkg.com/lit-element/lit-element.js?module'

class Message extends LitElement {
  static get properties() {
    return {
    }
  }

  constructor() {
    super()
    this.arr = [1,2,3,4,5]
  }

  render() {
    return html`
    <link rel="stylesheet" href="./components/tp-message/style.css">
    <main class="content">
      ${this.arr.map(() =>
        html`<article class="message">
          <img class="image" src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"/>
          <h3 class="title">Title</h3>
          <p class="description">Descripton</p>
          <button class="button">Go!</button>
        </article>`
      )}
    </main>
    `
  }

  _valueChanged() {
    this.dispatchEvent(new CustomEvent('valueChange', { detail: this.open }))
  }
}

customElements.define('tp-message', Message)
