import { LitElement, html } from 'https://unpkg.com/lit-element/lit-element.js?module'

class Link extends LitElement {

  static get properties() {
    return {
     to: { type: String }
    }
  }

  render() {
    return html`
      <a href=${this.to} 
        @click=${this._onClick}
      ><slot></slot></a>
    `
  }

  _onClick(e) {
    e.preventDefault()
    history.pushState({}, '', this.to);
    console.log('click')
    let myEvent = new CustomEvent('page-navigation', { 
      detail: { path: this.to },
      bubbles: true, 
      composed: true });
  this.dispatchEvent(myEvent);
  }
}

customElements.define('tp-link', Link)
