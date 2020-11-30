import { LightningElement } from 'lwc';

export default class GrandParent extends LightningElement {
     totalSelected = 0;

    handleCustomEvt2(event) {
        this.totalSelected = event.detail;
    }
}