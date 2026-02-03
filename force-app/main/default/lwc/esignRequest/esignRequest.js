import { LightningElement, wire } from 'lwc';
import fetchRequests from '@salesforce/apex/GetAllRequests.fetchAllRequests';

export default class esignRequest extends LightningElement {

    signlist;

    @wire(fetchRequests)
    signData({data, error}) {
        if(data) {
             this.signlist=[];

                data.forEach((sign)=>{
                    const obj =
                    {
                        Name:sign.Name,
                        Id:sign.Id,
                        Sent_to:sign.Sent_to__c,
                        Signing_Status: sign.Signing_Status__c === "Signed"? true:false ,
                        Signed_on:sign.Signed_on__c
                    }
                    
                    this.signlist.push(obj);

                })
                
        }
        if(error) {
            console.log(error);
        }
    }

   

    


}