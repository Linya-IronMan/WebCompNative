export default class MeButton extends HTMLElement {
    constructor() {
        super();

        const template = document.createElement('template');
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
      <button class="me-button">click ${this.size}</button>
    `;
        const shadowRoot = this.attachShadow({
            mode: 'closed',
        });

        shadowRoot.appendChild(template.content);
    }

    sizeRules = ['mini', 'small', 'medium'];

    get size() {
        const size = this.getAttribute('size');
        if (!this.sizeRules.includes(size) && size.length) {
            throw new Error(`${size} is not in ${this.sizeRules}`);
        }
        console.log(size, 'attribute size');
        return size || 'medium';
    }
}

if (!window.customElements.get('me-button')) {
    window.customElements.define('me-button', MeButton);
}