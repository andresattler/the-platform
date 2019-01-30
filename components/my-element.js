const template = document.createElement('template')
template.innerHTML = `<p>my web-component</p>`
class MyElement extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({
      mode: 'open',
    })
  } 
  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}
customElements.define('my-element', MyElement)
