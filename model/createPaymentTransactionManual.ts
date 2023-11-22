/**
 * ManageSpace Payment API
 * ManageSpace Payment API Documentation
 *
 * The version of the OpenAPI document: 0.0.11-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { PaymentMethod } from './paymentMethod';

export class CreatePaymentTransactionManual {
    /**
    * The identifier of the shopping cart.
    */
    'invoiceId': string;
    /**
    * Invoice line item ids.
    */
    'invoiceLineItemIds': string;
    'paymentMethod'?: PaymentMethod;
    /**
    * Account ID
    */
    'accountId': string;
    /**
    * Payment type
    */
    'paymentType'?: CreatePaymentTransactionManual.PaymentTypeEnum = CreatePaymentTransactionManual.PaymentTypeEnum.CreditCard;
    /**
    * Check number
    */
    'checkNumber'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "invoiceId",
            "baseName": "invoiceId",
            "type": "string"
        },
        {
            "name": "invoiceLineItemIds",
            "baseName": "invoiceLineItemIds",
            "type": "string"
        },
        {
            "name": "paymentMethod",
            "baseName": "paymentMethod",
            "type": "PaymentMethod"
        },
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "string"
        },
        {
            "name": "paymentType",
            "baseName": "paymentType",
            "type": "CreatePaymentTransactionManual.PaymentTypeEnum"
        },
        {
            "name": "checkNumber",
            "baseName": "checkNumber",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreatePaymentTransactionManual.attributeTypeMap;
    }
}

export namespace CreatePaymentTransactionManual {
    export enum PaymentTypeEnum {
        CreditCard = <any> 'credit_card',
        Cash = <any> 'cash',
        Check = <any> 'check'
    }
}