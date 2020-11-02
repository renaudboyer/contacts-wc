const initList = ['Roberto CARLOS', 'Rudy VOLLER', 'Jean-pierre PAPIN'];
const cntContactAppTemplate = document.createElement('template');
cntContactAppTemplate.innerHTML = `
<form>
    <label for="firstNameInput">Prenom</label>
    <input id="firstNameInput" type="text">
    <label for="lastNameInput">Nom</label>
    <input id="lastNameInput" type="text">
</form>
<button id="btn-add">Add</button>
<cnt-contact-list>
</cnt-contact-list>
`

class CntContactApp extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open'});
        shadowRoot.appendChild(cntContactAppTemplate.content.cloneNode(true));

        const button = shadowRoot.querySelector('#btn-add');
        button.addEventListener('click', this.addContactFromForm.bind(this));

        initList.forEach((name) =>{
            this.addContact(name);
        })
    }

    addContactFromForm() {
        const firstNameElement = this.shadowRoot.getElementById('firstNameInput');
        const lastNameElement = this.shadowRoot.getElementById('lastNameInput');
        const name = firstNameElement.value + ' ' + lastNameElement.value;
        this.addContact(name);
    }

    addContact(name) {
        const contactList = this.shadowRoot.querySelector('cnt-contact-list');
        const contact = document.createElement('cnt-contact');
        contact.appendChild(document.createTextNode(name));
        contactList.appendChild(contact);
    }
}

customElements.define('cnt-contact-app', CntContactApp)
