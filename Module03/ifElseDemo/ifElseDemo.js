import { LightningElement } from 'lwc';
import TomAndJerry from '@salesforce/resourceUrl/TomAndJerry';
export default class IfElseDemo extends LightningElement {
    tom = TomAndJerry + '/tom1.jpg';
    jerry = TomAndJerry +'/jerry1.png';
    showImg = false;

    showJerry() {
        this.showImg = false; 
    }

    showTom() {
        this.showImg = true;
    }
}

