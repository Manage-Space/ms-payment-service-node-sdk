import localVarRequest from 'request';

export * from './badRequestError400Response';
export * from './badRequestError400ResponseError';
export * from './baseError';
export * from './createPaymentTransaction';
export * from './createPaymentTransactionManual';
export * from './createSetupIntent200Response';
export * from './customerResponse';
export * from './forbiddenError403Response';
export * from './forbiddenError403ResponseError';
export * from './getPaymentMethods200Response';
export * from './getPaymentTransactions200Response';
export * from './getTransactions200Response';
export * from './internalServerError500Response';
export * from './internalServerError500ResponseError';
export * from './paymentMethod';
export * from './paymentMethodResponse';
export * from './paymentTransactionRequest';
export * from './paymentTransactionRequestRequest';
export * from './paymentTransactionResponse';
export * from './paymentTransactionResponsePaymentMethod';
export * from './paymentTransactionStatus';
export * from './paymentTransactionTypeEnum';
export * from './transactionResponse';
export * from './transactionStatusCodeNames';
export * from './transactionStatusResponse';
export * from './transactionTypeEnum';
export * from './unauthorizedError401Response';
export * from './unauthorizedError401ResponseError';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { BadRequestError400Response } from './badRequestError400Response';
import { BadRequestError400ResponseError } from './badRequestError400ResponseError';
import { BaseError } from './baseError';
import { CreatePaymentTransaction } from './createPaymentTransaction';
import { CreatePaymentTransactionManual } from './createPaymentTransactionManual';
import { CreateSetupIntent200Response } from './createSetupIntent200Response';
import { CustomerResponse } from './customerResponse';
import { ForbiddenError403Response } from './forbiddenError403Response';
import { ForbiddenError403ResponseError } from './forbiddenError403ResponseError';
import { GetPaymentMethods200Response } from './getPaymentMethods200Response';
import { GetPaymentTransactions200Response } from './getPaymentTransactions200Response';
import { GetTransactions200Response } from './getTransactions200Response';
import { InternalServerError500Response } from './internalServerError500Response';
import { InternalServerError500ResponseError } from './internalServerError500ResponseError';
import { PaymentMethod } from './paymentMethod';
import { PaymentMethodResponse } from './paymentMethodResponse';
import { PaymentTransactionRequest } from './paymentTransactionRequest';
import { PaymentTransactionRequestRequest } from './paymentTransactionRequestRequest';
import { PaymentTransactionResponse } from './paymentTransactionResponse';
import { PaymentTransactionResponsePaymentMethod } from './paymentTransactionResponsePaymentMethod';
import { PaymentTransactionStatus } from './paymentTransactionStatus';
import { PaymentTransactionTypeEnum } from './paymentTransactionTypeEnum';
import { TransactionResponse } from './transactionResponse';
import { TransactionStatusCodeNames } from './transactionStatusCodeNames';
import { TransactionStatusResponse } from './transactionStatusResponse';
import { TransactionTypeEnum } from './transactionTypeEnum';
import { UnauthorizedError401Response } from './unauthorizedError401Response';
import { UnauthorizedError401ResponseError } from './unauthorizedError401ResponseError';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "CreatePaymentTransaction.PaymentTypeEnum": CreatePaymentTransaction.PaymentTypeEnum,
        "CreatePaymentTransactionManual.PaymentTypeEnum": CreatePaymentTransactionManual.PaymentTypeEnum,
        "PaymentMethodResponse.BrandEnum": PaymentMethodResponse.BrandEnum,
        "PaymentMethodResponse.TypeEnum": PaymentMethodResponse.TypeEnum,
        "PaymentTransactionRequestRequest.PaymentTypeEnum": PaymentTransactionRequestRequest.PaymentTypeEnum,
        "PaymentTransactionResponsePaymentMethod.BrandEnum": PaymentTransactionResponsePaymentMethod.BrandEnum,
        "PaymentTransactionResponsePaymentMethod.TypeEnum": PaymentTransactionResponsePaymentMethod.TypeEnum,
        "PaymentTransactionStatus": PaymentTransactionStatus,
        "PaymentTransactionTypeEnum": PaymentTransactionTypeEnum,
        "TransactionStatusCodeNames": TransactionStatusCodeNames,
        "TransactionTypeEnum": TransactionTypeEnum,
}

let typeMap: {[index: string]: any} = {
    "BadRequestError400Response": BadRequestError400Response,
    "BadRequestError400ResponseError": BadRequestError400ResponseError,
    "BaseError": BaseError,
    "CreatePaymentTransaction": CreatePaymentTransaction,
    "CreatePaymentTransactionManual": CreatePaymentTransactionManual,
    "CreateSetupIntent200Response": CreateSetupIntent200Response,
    "CustomerResponse": CustomerResponse,
    "ForbiddenError403Response": ForbiddenError403Response,
    "ForbiddenError403ResponseError": ForbiddenError403ResponseError,
    "GetPaymentMethods200Response": GetPaymentMethods200Response,
    "GetPaymentTransactions200Response": GetPaymentTransactions200Response,
    "GetTransactions200Response": GetTransactions200Response,
    "InternalServerError500Response": InternalServerError500Response,
    "InternalServerError500ResponseError": InternalServerError500ResponseError,
    "PaymentMethod": PaymentMethod,
    "PaymentMethodResponse": PaymentMethodResponse,
    "PaymentTransactionRequest": PaymentTransactionRequest,
    "PaymentTransactionRequestRequest": PaymentTransactionRequestRequest,
    "PaymentTransactionResponse": PaymentTransactionResponse,
    "PaymentTransactionResponsePaymentMethod": PaymentTransactionResponsePaymentMethod,
    "TransactionResponse": TransactionResponse,
    "TransactionStatusResponse": TransactionStatusResponse,
    "UnauthorizedError401Response": UnauthorizedError401Response,
    "UnauthorizedError401ResponseError": UnauthorizedError401ResponseError,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
public accessToken: string | (() => string) = process.env.MS_TOKEN || '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
