import { LightningElement,api } from 'lwc';

export default class ChildOne extends LightningElement {

    buttonClick(event) {
        if(event.target.label === 'Select') {
            event.target.variant="destructive";
            event.target.label = "Deselect";
        } else {
            event.target.variant="success";
            event.target.label = "Select";
        }

        //Create custom event and dispatch
        const customevt = new CustomEvent('customevt');
        this.dispatchEvent(customevt);

    }
}