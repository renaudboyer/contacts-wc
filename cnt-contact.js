class CntContact extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open'});
        const li = document.createElement('li');
        const slot = document.createElement('slot');

        li.appendChild(slot);
        shadowRoot.appendChild(li);
    }
}

customElements.define('cnt-contact', CntContact)
