class Router extends HTMLElement {

  constructor() {
    super()
    this.attachShadow({
      mode: 'open',
    })
    this._valueChanged = this._valueChanged.bind(this)
    this.childRoutes = []
    this.prevRoute
  } 

  connectedCallback() {
    window.addEventListener('popstate', this._valueChanged)
    window.addEventListener('page-navigation', this._valueChanged)
    window.addEventListener('load', this._valueChanged)

  }

  _valueChanged(e) {
    const url = new URL(window.location)
    this.childRoutes = Array.from(this.querySelectorAll(`tp-route`));
    this.prevRoute = this.routeToDisplay && this.routeToDisplay
    this.routeToDisplay = this.childRoutes.find((route) => route.path === url.pathname)
    this.shadowRoot.appendChild(this.routeToDisplay)
    if (this.prevRoute && this.prevRoute !== this.routeToDisplay){
      this.shadowRoot.removeChild(this.prevRoute)
    }
  }
}

customElements.define('tp-router', Router)
