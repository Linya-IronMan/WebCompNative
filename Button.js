export default class MeButton extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = `
      <style>
        .me-button.me-button-size--default {
            /* padding: 7px 15px;
            font-size: 12px;
            border-radius: 3px; */
        }
        .me-button.me-button-size--medium {
            padding: 10px 20px;
            font-size: 14px;
            border-radius: 4px;
        }
        .me-button.me-button-size--small {
            padding: 9px 15px;
            font-size: 12px;
            border-radius: 3px;
        }
        .me-button.me-button-size--mini {
            padding: 7px 15px;
            font-size: 12px;
            border-radius: 3px;
        }

        .me-button {
            display: inline-block;
            line-height: 1;
            white-space: nowrap;
            cursor: pointer;
            background: #fff;
            border: 1px solid #dcdfe6;
            color: #606266;
            -webkit-appearance: none;
            text-align: center;
            box-sizing: border-box;
            outline: none;
            margin: 0;
            transition: .1s;
            font-weight: 500;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            padding: 12px 20px;
            font-size: 14px;
            border-radius: 4px;
        }
        .me-button:hover, .me-button:focus {
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
        }
      </style>
      <button class="me-button me-button-size--${this.size} ">click ${this.size}</button>
    `;
    const shadowRoot = this.attachShadow({
      mode: "closed",
    });
    shadowRoot.appendChild(template.content);
  }

  sizeRules = ["mini", "small", "medium"];

  get size() {
    const size = this.getAttribute("size");
    if (!this.sizeRules.includes(size) && size.length) {
      throw new Error(`${size} is not in ${this.sizeRules}`);
    }
    return size || "default";
  }

  connectedCallback() {
    // console.log(this.classList, "=== classList ===", this);
    // this.classList.add(`me-button-size--${this.size}`);
  }
}

if (!window.customElements.get("me-button")) {
  window.customElements.define("me-button", MeButton);
}
