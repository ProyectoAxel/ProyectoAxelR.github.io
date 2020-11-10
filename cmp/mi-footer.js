class MiFooter extends HTMLElement {
  connectedCallback(){
    this.innerHTML = /* html */
    "Copyright © 2020 Axel velarde";
    
  }
}
costomElements.define("mi-footer", MiFooter);
