import { LightningElement, wire } from 'lwc';
import getContactsList from '@salesforce/apex/ContactController.getContactList';

export default class MisContactos extends LightningElement {
    contactoSeleccionado;

    @wire(getContactsList) contactos;

    seleccionarContacto(event){
        const contactoId = event.detail;
        this.contactoSeleccionado = this.contactos.data.find(contacto => contacto.Id === contactoId);
    }

    get hayContactos(){
        return this.contactos && this.contactos.data && this.contactos.data.length > 0;
    }
}