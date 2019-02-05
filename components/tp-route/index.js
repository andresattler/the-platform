const template = document.createElement('template')
template.innerHTML = `<p><slot></slot></p>`
class Route extends HTMLElement {
  get path() {
    return this.getAttribute('path');
  }

  constructor() {
    super()
    this.attachShadow({
      mode: 'open',
    })
  } 

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  _valueChanged(e) {
  }
}

customElements.define('tp-route', Route)
