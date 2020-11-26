import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';

import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import OPPNAME_FIELD from '@salesforce/schema/Opportunity.Name';
import OPPCLOSEDATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';
import OPPSTAGENAME_FIELD from '@salesforce/schema/Opportunity.StageName';
import OPPACCOUNTNAME_FIELD from '@salesforce/schema/Opportunity.AccountId';

import CONTACT_OBJECT from '@salesforce/schema/Contact';
import CONTACT_NAMEFIELD from '@salesforce/schema/Contact.Name';
import CONTACT_FIRSTNAME from '@salesforce/schema/Contact.FirstName';
import CONTACT_LASTNAME from '@salesforce/schema/Contact.LastName';
import CONACCOUNTNAME_FIELD from '@salesforce/schema/Contact.AccountId';



/**
 * Creates Account records.
 */
export default class AccountCreator extends LightningElement {

    accountObject = ACCOUNT_OBJECT;
    myFields = [NAME_FIELD, WEBSITE_FIELD];

    opportunityObject = OPPORTUNITY_OBJECT;
    oppFields = [OPPNAME_FIELD, OPPCLOSEDATE_FIELD, OPPSTAGENAME_FIELD,OPPACCOUNTNAME_FIELD];

    contactObject = CONTACT_OBJECT;
    conFields = [CONTACT_NAMEFIELD,CONACCOUNTNAME_FIELD,CONTACT_FIRSTNAME, CONTACT_LASTNAME];

    handleAccountCreated(event){
        // Run code when account is created.
            console.log('acc suuccc')
            const inputFields = this.template.querySelectorAll();
            console.log(inputFields);
            if (inputFields) {
                inputFields.forEach(field => {
                        console.log(field);
                        field.reset();
                });
            }
    }

    handleOpportunityCreated(){

    }

    handleContactCreated(){

    }
}