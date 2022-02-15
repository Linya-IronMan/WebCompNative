# WebCompNative
WebComponent 原生开发

参照ElementUI的button组件写一个 WebComponent

| 参数 | 说明 | 类型   | 可选值            | 默认值 |
| ---- | ---- | ------ | ----------------- | ------ |
| size | 尺寸 | string | medium/small/mini | ---    |


# WebComponent 开发注意

原生开发的时候 html 代码都以字符串的形式存在，不方便。 可以安装插件 [innerHTML Syntax Highlighting](https://marketplace.visualstudio.com/items?itemName=nicolasparada.innerhtml)

原生组件的开发可以参考这个： https://github.com/mdn/web-components-examples

## 需要使用 shadow dom
shadow dom 的用途是隔离不同组件之间的样式，下面的代码没有用到 shadow dom，是不符合 WebComponent 实用要求的。

**attachShadow 时 mode 的作用**
事件对象中存在一个属性为 composedPath， 他会返回一个 EventTarget 对象数组， 也就是 DOM  数组。

mode：open
```javascript
Array [ p, ShadowRoot, open-shadow, body, html, HTMLDocument https://mdn.github.io/web-components-examples/composed-composed-path/, Window ]
```

mode: closed
```javascript

Array [ closed-shadow, body, html, HTMLDocument https://mdn.github.io/web-components-examples/composed-composed-path/, Window ]
```

closed 状态下的时候， 事件只会传播到 customoElement 而不会影响到影子边界内的节点。

```javascript
export default class MeButton extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = `
      <button class="me-button">click</button>
    `;
    this.appendChild(template.content);
  }
}

if (!window.customElements.get("me-button")) {
  window.customElements.define("me-button", MeButton);
}
```

下面这样的代码才是比较好的

```javascript
export default class MeButton extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = `
      <style>
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

```







