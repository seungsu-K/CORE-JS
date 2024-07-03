class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <div>nickName: kind-tiger</div>
      <slot name="username"></slot>
      <slot></slot>
      <button type="button">btn</button>
    `;

    this.button = this.shadowRoot.querySelector('button');
  }

  connectedCallback() {
    this.button.addEventListener('click', () => this.clickMe());
  }

  clickMe() {
    console.log(this);
  }
}

customElements.define('user-card', UserCard);
