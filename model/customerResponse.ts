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

export class CustomerResponse {
    /**
    * Payment Provider\'s identifier for the customer.
    */
    'paymentProviderId': string;
    /**
    * Customer\'s full name or company name
    */
    'name': string;
    /**
    * Customer\'s email address
    */
    'email': string;
    /**
    * Setup Intent ID
    */
    'clientSecret': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paymentProviderId",
            "baseName": "paymentProviderId",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "clientSecret",
            "baseName": "clientSecret",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CustomerResponse.attributeTypeMap;
    }
}

