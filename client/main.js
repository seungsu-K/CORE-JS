class Button extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = /* html */ `
       <button>hello</button>
    `;
  }

  connectedCallback() {}

  disconnectedCallback() {}
}

customElements.define('c-button', Button);
