/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class MessageStoreCallerInfo extends model.Model {

    /**
     * Extension short number (usually 3 or 4 digits). This property is filled when parties communicate by means of short internal numbers, for example when calling to other extension or sending/receiving Company Pager message
     */
    extensionNumber:string;

    /**
     * Contains party location (city, state) if one can be determined from phoneNumber. This property is filled only when phoneNumber is not empty and server can calculate location information from it (for example, this information is unavailable for US toll-free numbers)
     */
    location:string;

    /**
     * Status of a message. Returned for outbound fax messages only
     */
    messageStatus:MessageStoreCallerInfoMessageStatus;

    /**
     * Fax only. Error code returned in case of fax sending failure. Returned if messageStatus value is 'SendingFailed'
     */
    faxErrorCode:MessageStoreCallerInfoFaxErrorCode;

    /**
     * Symbolic name associated with a party. If the phone does not belong to the known extension, only the location is returned, the name is not determined then
     */
    name:string;

    /**
     * Phone number of a party. Usually it is a plain number including country and area code like 18661234567. But sometimes it could be returned from database with some formatting applied, for example (866)123-4567. This property is filled in all cases where parties communicate by means of global phone numbers, for example when calling to direct numbers or sending/receiving SMS
     */
    phoneNumber:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'extensionNumber', Class: null /* string */, isArray: false,isRequired: true},
            {property: 'location', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'messageStatus', Class: MessageStoreCallerInfoMessageStatus, isArray: false,isRequired: false},
            {property: 'faxErrorCode', Class: MessageStoreCallerInfoFaxErrorCode, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'phoneNumber', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'MessageStoreCallerInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum MessageStoreCallerInfoMessageStatus {
    Queued = <any>'Queued',
    Sent = <any>'Sent',
    Delivered = <any>'Delivered',
    DeliveryFailed = <any>'DeliveryFailed',
    SendingFailed = <any>'SendingFailed',
    Received = <any>'Received'
}

export enum MessageStoreCallerInfoFaxErrorCode {
    Undefined = <any>'Undefined',
    NoFaxSendPermission = <any>'NoFaxSendPermission',
    NoInternationalPermission = <any>'NoInternationalPermission',
    NoFaxMachine = <any>'NoFaxMachine',
    OutgoingCallError = <any>'OutgoingCallError',
    RenderingFailed = <any>'RenderingFailed',
    TooManyPages = <any>'TooManyPages',
    ReturnToDBQueue = <any>'ReturnToDBQueue',
    NoCallTime = <any>'NoCallTime',
    WrongNumber = <any>'WrongNumber',
    ProhibitedNumber = <any>'ProhibitedNumber',
    InternalError = <any>'InternalError',
    FaxSendingProhibited = <any>'FaxSendingProhibited',
    ThePhoneIsBlacklisted = <any>'ThePhoneIsBlacklisted',
    UserNotFound = <any>'UserNotFound',
    ConvertError = <any>'ConvertError',
    DBGeneralError = <any>'DBGeneralError',
    SkypeBillingFailed = <any>'SkypeBillingFailed',
    AccountSuspended = <any>'AccountSuspended',
    ProhibitedDestination = <any>'ProhibitedDestination',
    InternationalDisabled = <any>'InternationalDisabled'
}