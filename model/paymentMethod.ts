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

// Comment to trigger build

import { RequestFile } from './models';

export class PaymentMethod {
    /**
    * Payment provider ID associated with this payment method.
    */
    'paymentProviderId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paymentProviderId",
            "baseName": "paymentProviderId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethod.attributeTypeMap;
    }
}

