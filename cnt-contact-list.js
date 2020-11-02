class CntContactList extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open'});
        const ul = document.createElement('ul');
        const slot = document.createElement('slot');

        ul.appendChild(slot);
        shadowRoot.appendChild(ul);
    }
}

customElements.define('cnt-contact-list', CntContactList)
