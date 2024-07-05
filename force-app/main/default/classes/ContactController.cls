public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(){
        if (Schema.sObjectType.Contact.isAccessible()) {
            return [SELECT 
                Id, Name, FirstName, LastName, Title, Email, Phone, Picture__c 
                FROM Contact 
                WHERE Picture__c != NULL
                LIMIT 10];
        }
        return new List<Contact>();
    }
}