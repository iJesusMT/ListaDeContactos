import { LightningElement, api } from "lwc";

export default class ContactListItem extends LightningElement {
  @api contacto;

  seleccionarContacto(event) {
    event.preventDefault();
    const eventoSeleccionado = new CustomEvent("seleccionado", { detail: this.contacto.Id });
    this.dispatchEvent(eventoSeleccionado);
  }
}