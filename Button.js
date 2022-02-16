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

        .me-button.me-button-type--primary {
            color: #fff;
            background-color: #409eff;
            border-color: #409eff;
        }
        .me-button.me-button-type--primary:focus, 
        .me-button.me-button-type--primary:hover {
            background: #66b1ff;
            border-color: #66b1ff;
            color: #fff;
        }

        .me-button.me-button-type--success {
            color: #fff;
            background-color: #67c23a;
            border-color: #67c23a;
        }
        .me-button.me-button-type--success:focus, 
        .me-button.me-button-type--success:hover {
          background: #85ce61;
          border-color: #85ce61;
          color: #fff;
        }
        
        .me-button.me-button-type--warning {
          color: #fff;
          background-color: #e6a23c;
          border-color: #e6a23c;
        }
        .me-button.me-button-type--warning:focus, 
        .me-button.me-button-type--warning:hover {
          background: #ebb563;
          border-color: #ebb563;
          color: #fff;
        }


        .me-button.me-button-type--danger {
            color: #fff;
            background-color: #f56c6c;
            border-color: #f56c6c;
        }
        .me-button.me-button-type--danger:focus, 
        .me-button.me-button-type--danger:hover {
          background: #f78989;
          border-color: #f78989;
          color: #fff;
        }

        .me-button.me-button-type--info {
          color: #fff;
          background-color: #909399;
          border-color: #909399;
        }
        .me-button.me-button-type--info:focus, 
        .me-button.me-button-type--info:hover {
          background: #a6a9ad;
          border-color: #a6a9ad;
          color: #fff;
        }

        .me-button.me-button-type--text {
            border-color: transparent;
            color: #409eff;
            background: transparent;
            padding-left: 0;
            padding-right: 0;
        }
        .me-button.me-button-type--text:focus, 
        .me-button.me-button-type--text:hover {
          color: #66b1ff;
          border-color: transparent;
          background-color: transparent;
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
      <button class="me-button me-button-size--${this.size} me-button-type--${this.type}">
          <slot></slot>
      </button>
    `;
    const shadowRoot = this.attachShadow({
      mode: "closed",
    });
    shadowRoot.appendChild(template.content);
  }

  sizeRules = ["mini", "small", "medium"];

  get size() {
    const size = this.getAttribute("size");
    if (size && !this.sizeRules.includes(size)) {
      throw new Error(`${size} is not in ${this.sizeRules}`);
    }
    return size || "default";
  }

  typeRules = ["primary", "success", "warning", "danger", "info", "text"];

  get type() {
    const type = this.getAttribute("type");
    if (type && !this.typeRules.includes(type)) {
      throw new Error(`${type} is not in ${this.typeRules}`);
    }
    return type || "default";
  }
}

if (!window.customElements.get("me-button")) {
  window.customElements.define("me-button", MeButton);
}
