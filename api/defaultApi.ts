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


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { BadRequestError400Response } from '../model/badRequestError400Response';
import { CreateSetupIntent200Response } from '../model/createSetupIntent200Response';
import { ForbiddenError403Response } from '../model/forbiddenError403Response';
import { GetPaymentMethods200Response } from '../model/getPaymentMethods200Response';
import { GetPaymentTransactions200Response } from '../model/getPaymentTransactions200Response';
import { GetTransactions200Response } from '../model/getTransactions200Response';
import { InternalServerError500Response } from '../model/internalServerError500Response';
import { PaymentTransactionRequest } from '../model/paymentTransactionRequest';
import { UnauthorizedError401Response } from '../model/unauthorizedError401Response';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.dev.manage-space.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum DefaultApiApiKeys {
}

export class DefaultApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'bearer': new HttpBearerAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: DefaultApiApiKeys, value: string) {
        (this.authentications as any)[DefaultApiApiKeys[key]].apiKey = value;
    }

    set accessToken(accessToken: string | (() => string)) {
        this.authentications.bearer.accessToken = accessToken;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Confirms a payment transaction.
     * @summary Confirm payment transaction
     * @param orgId The Organization ID
     * @param siteId The Site ID
     * @param paymentTransactionId The Payment Transaction ID
     */
    public async confirmPaymentTransaction (orgId: string, siteId: string, paymentTransactionId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: GetPaymentTransactions200Response;  }> {
        const localVarPath = this.basePath + '/payment/orgs/{orgId}/sites/{siteId}/payment-transactions/{paymentTransactionId}'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'siteId' + '}', encodeURIComponent(String(siteId)))
            .replace('{' + 'paymentTransactionId' + '}', encodeURIComponent(String(paymentTransactionId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json;v=1'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new Error('Required parameter orgId was null or undefined when calling confirmPaymentTransaction.');
        }

        // verify required parameter 'siteId' is not null or undefined
        if (siteId === null || siteId === undefined) {
            throw new Error('Required parameter siteId was null or undefined when calling confirmPaymentTransaction.');
        }

        // verify required parameter 'paymentTransactionId' is not null or undefined
        if (paymentTransactionId === null || paymentTransactionId === undefined) {
            throw new Error('Required parameter paymentTransactionId was null or undefined when calling confirmPaymentTransaction.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: GetPaymentTransactions200Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "GetPaymentTransactions200Response");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Creates a payment transaction.
     * @summary Create payment transaction
     * @param orgId The Organization ID
     * @param siteId The Site ID
     * @param paymentTransactionRequest 
     */
    public async createPaymentTransaction (orgId: string, siteId: string, paymentTransactionRequest: PaymentTransactionRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: GetPaymentTransactions200Response;  }> {
        const localVarPath = this.basePath + '/payment/orgs/{orgId}/sites/{siteId}/payment-transactions'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'siteId' + '}', encodeURIComponent(String(siteId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json;v=1'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new Error('Required parameter orgId was null or undefined when calling createPaymentTransaction.');
        }

        // verify required parameter 'siteId' is not null or undefined
        if (siteId === null || siteId === undefined) {
            throw new Error('Required parameter siteId was null or undefined when calling createPaymentTransaction.');
        }

        // verify required parameter 'paymentTransactionRequest' is not null or undefined
        if (paymentTransactionRequest === null || paymentTransactionRequest === undefined) {
            throw new Error('Required parameter paymentTransactionRequest was null or undefined when calling createPaymentTransaction.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(paymentTransactionRequest, "PaymentTransactionRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: GetPaymentTransactions200Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "GetPaymentTransactions200Response");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Create a setup intent for a payment method for future use.
     * @summary Create a setup intent for a payment method for future use.
     * @param orgId Organization ID
     * @param paymentProviderId Payment provider ID
     */
    public async createSetupIntent (orgId: string, paymentProviderId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CreateSetupIntent200Response;  }> {
        const localVarPath = this.basePath + '/payment/orgs/{orgId}/customers/{paymentProviderId}/intents'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'paymentProviderId' + '}', encodeURIComponent(String(paymentProviderId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json;v=1'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new Error('Required parameter orgId was null or undefined when calling createSetupIntent.');
        }

        // verify required parameter 'paymentProviderId' is not null or undefined
        if (paymentProviderId === null || paymentProviderId === undefined) {
            throw new Error('Required parameter paymentProviderId was null or undefined when calling createSetupIntent.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: CreateSetupIntent200Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "CreateSetupIntent200Response");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Get list of payment methods; optional filter query `accountId`.
     * @summary Get list of payment methods for an org.
     * @param orgId Organization ID
     * @param offset The offset of the first record to return (0-indexed).
     * @param limit The maximum number of records to return per page.
     * @param accountId Account Id
     */
    public async getPaymentMethods (orgId: string, offset?: number, limit?: number, accountId?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: GetPaymentMethods200Response;  }> {
        const localVarPath = this.basePath + '/payment/orgs/{orgId}/payment-methods'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json;v=1'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new Error('Required parameter orgId was null or undefined when calling getPaymentMethods.');
        }

        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (accountId !== undefined) {
            localVarQueryParameters['accountId'] = ObjectSerializer.serialize(accountId, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: GetPaymentMethods200Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "GetPaymentMethods200Response");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Get a payment transaction by its unique identifier.
     * @summary Get a single payment transaction.
     * @param orgId The Organization ID
     * @param siteId The Site ID
     * @param paymentTransactionId The Payment Transaction ID
     */
    public async getPaymentTransactionById (orgId: string, siteId: string, paymentTransactionId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: GetPaymentTransactions200Response;  }> {
        const localVarPath = this.basePath + '/payment/orgs/{orgId}/sites/{siteId}/payment-transactions/{paymentTransactionId}'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'siteId' + '}', encodeURIComponent(String(siteId)))
            .replace('{' + 'paymentTransactionId' + '}', encodeURIComponent(String(paymentTransactionId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json;v=1'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new Error('Required parameter orgId was null or undefined when calling getPaymentTransactionById.');
        }

        // verify required parameter 'siteId' is not null or undefined
        if (siteId === null || siteId === undefined) {
            throw new Error('Required parameter siteId was null or undefined when calling getPaymentTransactionById.');
        }

        // verify required parameter 'paymentTransactionId' is not null or undefined
        if (paymentTransactionId === null || paymentTransactionId === undefined) {
            throw new Error('Required parameter paymentTransactionId was null or undefined when calling getPaymentTransactionById.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: GetPaymentTransactions200Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "GetPaymentTransactions200Response");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Get list of payment transactions with filters such as `accountId`, etc.
     * @summary Get list of payment transactions
     * @param orgId The Organization ID
     * @param siteId The Site ID
     * @param offset The offset of the first record to return (0-indexed).
     * @param limit The maximum number of records to return per page.
     * @param dateFrom 
     * @param dateTo 
     * @param accountId Account Id
     * @param invoiceId Invoice Id
     */
    public async getPaymentTransactions (orgId: string, siteId: string, offset?: number, limit?: number, dateFrom?: Date, dateTo?: Date, accountId?: string, invoiceId?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: GetPaymentTransactions200Response;  }> {
        const localVarPath = this.basePath + '/payment/orgs/{orgId}/sites/{siteId}/payment-transactions'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'siteId' + '}', encodeURIComponent(String(siteId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json;v=1'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new Error('Required parameter orgId was null or undefined when calling getPaymentTransactions.');
        }

        // verify required parameter 'siteId' is not null or undefined
        if (siteId === null || siteId === undefined) {
            throw new Error('Required parameter siteId was null or undefined when calling getPaymentTransactions.');
        }

        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (dateFrom !== undefined) {
            localVarQueryParameters['dateFrom'] = ObjectSerializer.serialize(dateFrom, "Date");
        }

        if (dateTo !== undefined) {
            localVarQueryParameters['dateTo'] = ObjectSerializer.serialize(dateTo, "Date");
        }

        if (accountId !== undefined) {
            localVarQueryParameters['accountId'] = ObjectSerializer.serialize(accountId, "string");
        }

        if (invoiceId !== undefined) {
            localVarQueryParameters['invoiceId'] = ObjectSerializer.serialize(invoiceId, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: GetPaymentTransactions200Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "GetPaymentTransactions200Response");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Get a transaction by its unique identifier.
     * @summary Get a single transaction.
     * @param orgId The Organization ID
     * @param transactionId The Transaction ID
     */
    public async getTransactionById (orgId: string, transactionId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: GetTransactions200Response;  }> {
        const localVarPath = this.basePath + '/payment/orgs/{orgId}/transactions/{transactionId}'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'transactionId' + '}', encodeURIComponent(String(transactionId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json;v=1'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new Error('Required parameter orgId was null or undefined when calling getTransactionById.');
        }

        // verify required parameter 'transactionId' is not null or undefined
        if (transactionId === null || transactionId === undefined) {
            throw new Error('Required parameter transactionId was null or undefined when calling getTransactionById.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: GetTransactions200Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "GetTransactions200Response");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Get list of transactions with filters such as `siteId`; `accountId`, etc.
     * @summary Get list of transactions
     * @param orgId The Organization ID
     * @param offset The offset of the first record to return (0-indexed).
     * @param limit The maximum number of records to return per page.
     * @param dateFrom 
     * @param dateTo 
     * @param siteId Site Id
     * @param accountId Account Id
     * @param leaseId Lease Id
     */
    public async getTransactions (orgId: string, offset?: number, limit?: number, dateFrom?: Date, dateTo?: Date, siteId?: string, accountId?: string, leaseId?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: GetTransactions200Response;  }> {
        const localVarPath = this.basePath + '/payment/orgs/{orgId}/transactions'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json;v=1'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new Error('Required parameter orgId was null or undefined when calling getTransactions.');
        }

        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (dateFrom !== undefined) {
            localVarQueryParameters['dateFrom'] = ObjectSerializer.serialize(dateFrom, "Date");
        }

        if (dateTo !== undefined) {
            localVarQueryParameters['dateTo'] = ObjectSerializer.serialize(dateTo, "Date");
        }

        if (siteId !== undefined) {
            localVarQueryParameters['siteId'] = ObjectSerializer.serialize(siteId, "string");
        }

        if (accountId !== undefined) {
            localVarQueryParameters['accountId'] = ObjectSerializer.serialize(accountId, "string");
        }

        if (leaseId !== undefined) {
            localVarQueryParameters['leaseId'] = ObjectSerializer.serialize(leaseId, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: GetTransactions200Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "GetTransactions200Response");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
