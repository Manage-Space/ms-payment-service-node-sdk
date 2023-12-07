/**
 * ManageSpace Payment API
 * ManageSpace Payment API Documentation
 *
 * The version of the OpenAPI document: 0.0.12-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { CreatePaymentTransaction } from './createPaymentTransaction';
import { CreatePaymentTransactionManual } from './createPaymentTransactionManual';
import { PaymentMethod } from './paymentMethod';

/**
* Request
*/
export class PaymentTransactionRequestRequest {
    /**
    * The identifier of the shopping cart.
    */
    'cartId': string;
    /**
    * Amount in smallest currency unit (e.g. cents for USD).
    */
    'amount': number;
    'paymentMethod'?: PaymentMethod;
    /**
    * Account ID
    */
    'accountId': string;
    /**
    * Payment type
    */
    'paymentType'?: PaymentTransactionRequestRequest.PaymentTypeEnum = PaymentTransactionRequestRequest.PaymentTypeEnum.CreditCard;
    /**
    * Check number
    */
    'checkNumber'?: string;
    /**
    * The identifier of the shopping cart.
    */
    'invoiceId': string;
    /**
    * Invoice line item ids.
    */
    'invoiceLineItemIds': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cartId",
            "baseName": "cartId",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
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
            "type": "PaymentTransactionRequestRequest.PaymentTypeEnum"
        },
        {
            "name": "checkNumber",
            "baseName": "checkNumber",
            "type": "string"
        },
        {
            "name": "invoiceId",
            "baseName": "invoiceId",
            "type": "string"
        },
        {
            "name": "invoiceLineItemIds",
            "baseName": "invoiceLineItemIds",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentTransactionRequestRequest.attributeTypeMap;
    }
}

export namespace PaymentTransactionRequestRequest {
    export enum PaymentTypeEnum {
        CreditCard = <any> 'credit_card',
        Cash = <any> 'cash',
        Check = <any> 'check'
    }
}
