class CntContact extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open'});
        const li = document.createElement('li');
        const slot = document.createElement('slot');

        const button = document.createElement('button');
        button.innerText = "Delete"
        button.addEventListener("click", this.delete.bind(this))

        li.appendChild(slot);
        li.appendChild(button);
        shadowRoot.appendChild(li);
    }

    delete() {
        this.remove();
    }
}

customElements.define('cnt-contact', CntContact)
