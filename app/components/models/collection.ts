import { Http, Response } from '@angular/http';
import { BaseCollection } from "./basecollection";
import * as _ from 'lodash';
import {ApiService} from "../utils/apiservice";

export class Collection extends BaseCollection {
    inspectStats: any;

    /**
     * Extends BaseCollection class to do create, update and delete using POST, PUT and DELETE verbs.
     * @param $http
     * @param $q
     * @param url Used for doing HTTP GET and fetch objects from server
     * @constructor
     */
    constructor(http: Http, url, apiService: ApiService) {
        super(http, url, apiService);
        this.inspectStats = {};
    }

    /**
     *
     * @param model
     * @param url Optional if not passed it is constructed using key and url passed in constructor
     * @returns {*}
     */
    create(model, url):Promise<any> {
        var collection = this;
        var promise = new Promise(function (resolve, reject) {
            if (url === undefined) url = collection.url + model.key + '/';
            collection.apiService.post(url, model).map((res: Response) => res.json()).toPromise()
                .then(function successCallback(response) {
                    var responseData = response;
                    //For rest endpoints that do not return created json object in response
                    if ((responseData === undefined) || (responseData === '')) {
                        responseData = model;
                    }
                    collection.models.push(responseData);
                    resolve(responseData);
                }, function errorCallback(response) {
                    reject(response);
                });
        });


        return promise;
    };

    /**
     * This is for netmaster specific endpoints and used by netmaster objects only.
     * TODO: Generalize
     * @param model
     * @param url Optional
     * @returns {*}
     */
    save(model):Promise<any> {
        var collection = this;
        var promise = new Promise(function (resolve, reject) {
            var url = collection.url + model.key + '/';
            collection.apiService.put(url, model).map((res: Response) => res.json()).toPromise()
                .then(function successCallback(response) {
                    _.remove(collection.models, function (n) {
                        return n['key'] == model['key'];
                    });
                    collection.models.push(response);
                    resolve(response);
                }, function errorCallback(response) {
                    reject(response);
                });
        });
        return promise;
    };

    /**
     * This is for netmaster specific endpoints and used by netmaster objects only.
     * TODO: Generalize
     * @param model
     * @returns {*}
     */
    delete(model):Promise<any> {
        var collection = this;
        var promise = new Promise(function (resolve, reject) {
            var url = collection.url + model.key + '/';
            collection.apiService.delete(url).map((res: Response) => res.json()).toPromise()
                .then(function successCallback(response) {
                    _.remove(collection.models, function (n) {
                        return n['key'] == model['key'];
                    });
                    resolve(response);
                }, function errorCallback(response) {
                    reject(response);
                });
        });
        return promise;
    };

    /**
     *
     * @param key
     * @param keyname
     * @param url Optional if not passed it is constructed using key and url passed in constructor
     * @returns {*}
     */
    deleteUsingKey(key, keyname, url):Promise<any> {
        var collection = this;
        if (keyname === undefined) keyname = 'key';
        var promise = new Promise(function (resolve, reject) {
            if (url === undefined) url = collection.url + key + '/';
            collection.apiService.delete(url).map((res: Response) => res.json()).toPromise()
                .then(function successCallback(response) {
                    _.remove(collection.models, function (n) {
                        return n[keyname] == key;
                    });
                    resolve(response);
                }, function errorCallback(response) {
                    reject(response);
                });
        });
        return promise;
    };


    getInspectByKey(key, url, refresh): Promise<any>{
        var collection = this;
        var promise = new Promise(function (resolve, reject) {
            if(key in collection.inspectStats && refresh == false){
                resolve(collection.inspectStats[key]);
            }
            else {
                collection.apiService.get(url + key + '/').map((res: Response) => res.json()).toPromise()
                    .then(function successCallback(response) {
                            var responseStats = response;
                            collection.inspectStats[key] = responseStats;
                            resolve(responseStats);
                        }
                        , function errorCallback(error) {
                            reject(error);
                        });
            }
        });

        return promise;
    };
}


