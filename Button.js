export default class MeButton extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = `
      <style>
        .me-button-size--medium {
          
        }
        .me-button-size--small {
          
        }
        .me-button-size--mini {
          
        }
        .me-button {
          color: red;
        }
      </style>
      <button class="me-button">click</button>
    `;
    const shadowRoot = this.attachShadow({
      mode: "closed",
    });

    shadowRoot.appendChild(template.content);
  }
}

if (!window.customElements.get("me-button")) {
  window.customElements.define("me-button", MeButton);
}
