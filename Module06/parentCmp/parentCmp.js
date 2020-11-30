import { LightningElement, api} from 'lwc';

export default class ParentCmp extends LightningElement {
    childOneVal = 'Deselected';
    @api totalcount = 0;

    handleCustomEvt() {
        if(this.childOneVal === 'Deselected') {
            this.childOneVal = 'Selected';
            this.totalcount = parseInt(this.totalcount) + 1;
        } else if (this.childOneVal === 'Selected') {
            this.childOneVal = 'Deselected';
            this.totalcount = parseInt(this.totalcount) - 1;
        }
        //Create custom event and dispatch
        const customevt2 = new CustomEvent('customevt2', {
            detail : this.totalcount
        });

        this.dispatchEvent(customevt2);
    }
} 