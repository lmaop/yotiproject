public with sharing class GetAllRequests {

    @AuraEnabled(cacheable=true)
    public static List<Esign_Request__c> fetchAllRequests() {
        return [SELECT Id,
                Name, 
                Signing_Status__c,
                Signed_on__c,
                Sent_to__c 
                FROM Esign_Request__c];
    }


}