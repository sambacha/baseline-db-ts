/* tslint:disable */
/* eslint-disable */
/**
 * merkle-tree
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
/**
 * NodeApi - axios parameter creator
 * @export
 */
export const NodeApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary /node/:nodeIndex -> gets a node at nodeIndex
         * @param {string} contentType 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nodeNodeIndexgetsanodeatnodeIndex: async (contentType: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'contentType' is not null or undefined
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling nodeNodeIndexgetsanodeatnodeIndex.');
            }
            const localVarPath = `/node/index/0`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary /node/:nodeIndex -> updates a node at nodeIndex
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nodeNodeIndexupdatesanodeatnodeIndex: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/node/index/1`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary /node/index -> gets a node at nodeIndex
         * @param {string} contentType 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nodeindexgetsanodeatnodeIndex: async (contentType: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'contentType' is not null or undefined
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling nodeindexgetsanodeatnodeIndex.');
            }
            const localVarPath = `/node/index`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * inserts a node object
         * @summary /node -> inserts a node object
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nodeinsertsanodeobject: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/node`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary /nodes/count -> count the number of nodes in the db
         * @param {string} contentType 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nodescountcountthenumberofnodesinthedb: async (contentType: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'contentType' is not null or undefined
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling nodescountcountthenumberofnodesinthedb.');
            }
            const localVarPath = `/nodes/count`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary /nodes -> get nodes by array of indices
         * @param {string} contentType 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nodesgetnodesbyarrayofindices: async (contentType: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'contentType' is not null or undefined
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling nodesgetnodesbyarrayofindices.');
            }
            const localVarPath = `/nodes`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * inserts a leaf object
         * @summary /nodes -> updates many node objects
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nodesupdatesmanynodeobjects: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/nodes`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary /node/value -> gets a node with a given value
         * @param {string} contentType 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nodevaluegetsanodewithagivenvalue: async (contentType: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'contentType' is not null or undefined
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling nodevaluegetsanodewithagivenvalue.');
            }
            const localVarPath = `/node/value`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * NodeApi - functional programming interface
 * @export
 */
export const NodeApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary /node/:nodeIndex -> gets a node at nodeIndex
         * @param {string} contentType 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nodeNodeIndexgetsanodeatnodeIndex(contentType: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await NodeApiAxiosParamCreator(configuration).nodeNodeIndexgetsanodeatnodeIndex(contentType, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary /node/:nodeIndex -> updates a node at nodeIndex
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nodeNodeIndexupdatesanodeatnodeIndex(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await NodeApiAxiosParamCreator(configuration).nodeNodeIndexupdatesanodeatnodeIndex(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary /node/index -> gets a node at nodeIndex
         * @param {string} contentType 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nodeindexgetsanodeatnodeIndex(contentType: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await NodeApiAxiosParamCreator(configuration).nodeindexgetsanodeatnodeIndex(contentType, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * inserts a node object
         * @summary /node -> inserts a node object
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nodeinsertsanodeobject(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await NodeApiAxiosParamCreator(configuration).nodeinsertsanodeobject(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary /nodes/count -> count the number of nodes in the db
         * @param {string} contentType 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nodescountcountthenumberofnodesinthedb(contentType: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await NodeApiAxiosParamCreator(configuration).nodescountcountthenumberofnodesinthedb(contentType, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary /nodes -> get nodes by array of indices
         * @param {string} contentType 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nodesgetnodesbyarrayofindices(contentType: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await NodeApiAxiosParamCreator(configuration).nodesgetnodesbyarrayofindices(contentType, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * inserts a leaf object
         * @summary /nodes -> updates many node objects
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nodesupdatesmanynodeobjects(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await NodeApiAxiosParamCreator(configuration).nodesupdatesmanynodeobjects(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary /node/value -> gets a node with a given value
         * @param {string} contentType 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nodevaluegetsanodewithagivenvalue(contentType: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await NodeApiAxiosParamCreator(configuration).nodevaluegetsanodewithagivenvalue(contentType, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * NodeApi - factory interface
 * @export
 */
export const NodeApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary /node/:nodeIndex -> gets a node at nodeIndex
         * @param {string} contentType 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nodeNodeIndexgetsanodeatnodeIndex(contentType: string, options?: any): AxiosPromise<void> {
            return NodeApiFp(configuration).nodeNodeIndexgetsanodeatnodeIndex(contentType, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary /node/:nodeIndex -> updates a node at nodeIndex
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nodeNodeIndexupdatesanodeatnodeIndex(options?: any): AxiosPromise<void> {
            return NodeApiFp(configuration).nodeNodeIndexupdatesanodeatnodeIndex(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary /node/index -> gets a node at nodeIndex
         * @param {string} contentType 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nodeindexgetsanodeatnodeIndex(contentType: string, options?: any): AxiosPromise<void> {
            return NodeApiFp(configuration).nodeindexgetsanodeatnodeIndex(contentType, options).then((request) => request(axios, basePath));
        },
        /**
         * inserts a node object
         * @summary /node -> inserts a node object
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nodeinsertsanodeobject(options?: any): AxiosPromise<void> {
            return NodeApiFp(configuration).nodeinsertsanodeobject(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary /nodes/count -> count the number of nodes in the db
         * @param {string} contentType 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nodescountcountthenumberofnodesinthedb(contentType: string, options?: any): AxiosPromise<void> {
            return NodeApiFp(configuration).nodescountcountthenumberofnodesinthedb(contentType, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary /nodes -> get nodes by array of indices
         * @param {string} contentType 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nodesgetnodesbyarrayofindices(contentType: string, options?: any): AxiosPromise<void> {
            return NodeApiFp(configuration).nodesgetnodesbyarrayofindices(contentType, options).then((request) => request(axios, basePath));
        },
        /**
         * inserts a leaf object
         * @summary /nodes -> updates many node objects
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nodesupdatesmanynodeobjects(options?: any): AxiosPromise<void> {
            return NodeApiFp(configuration).nodesupdatesmanynodeobjects(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary /node/value -> gets a node with a given value
         * @param {string} contentType 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nodevaluegetsanodewithagivenvalue(contentType: string, options?: any): AxiosPromise<void> {
            return NodeApiFp(configuration).nodevaluegetsanodewithagivenvalue(contentType, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * NodeApi - object-oriented interface
 * @export
 * @class NodeApi
 * @extends {BaseAPI}
 */
export class NodeApi extends BaseAPI {
    /**
     * 
     * @summary /node/:nodeIndex -> gets a node at nodeIndex
     * @param {string} contentType 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NodeApi
     */
    public nodeNodeIndexgetsanodeatnodeIndex(contentType: string, options?: any) {
        return NodeApiFp(this.configuration).nodeNodeIndexgetsanodeatnodeIndex(contentType, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary /node/:nodeIndex -> updates a node at nodeIndex
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NodeApi
     */
    public nodeNodeIndexupdatesanodeatnodeIndex(options?: any) {
        return NodeApiFp(this.configuration).nodeNodeIndexupdatesanodeatnodeIndex(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary /node/index -> gets a node at nodeIndex
     * @param {string} contentType 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NodeApi
     */
    public nodeindexgetsanodeatnodeIndex(contentType: string, options?: any) {
        return NodeApiFp(this.configuration).nodeindexgetsanodeatnodeIndex(contentType, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * inserts a node object
     * @summary /node -> inserts a node object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NodeApi
     */
    public nodeinsertsanodeobject(options?: any) {
        return NodeApiFp(this.configuration).nodeinsertsanodeobject(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary /nodes/count -> count the number of nodes in the db
     * @param {string} contentType 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NodeApi
     */
    public nodescountcountthenumberofnodesinthedb(contentType: string, options?: any) {
        return NodeApiFp(this.configuration).nodescountcountthenumberofnodesinthedb(contentType, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary /nodes -> get nodes by array of indices
     * @param {string} contentType 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NodeApi
     */
    public nodesgetnodesbyarrayofindices(contentType: string, options?: any) {
        return NodeApiFp(this.configuration).nodesgetnodesbyarrayofindices(contentType, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * inserts a leaf object
     * @summary /nodes -> updates many node objects
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NodeApi
     */
    public nodesupdatesmanynodeobjects(options?: any) {
        return NodeApiFp(this.configuration).nodesupdatesmanynodeobjects(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary /node/value -> gets a node with a given value
     * @param {string} contentType 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NodeApi
     */
    public nodevaluegetsanodewithagivenvalue(contentType: string, options?: any) {
        return NodeApiFp(this.configuration).nodevaluegetsanodewithagivenvalue(contentType, options).then((request) => request(this.axios, this.basePath));
    }
}