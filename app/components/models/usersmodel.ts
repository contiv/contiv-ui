/**
 * Created by vjain3 on 11/7/16.
 */
import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Collection } from "./collection";
import { ContivGlobals } from "./contivglobals";
import { ApiService } from "../utils/apiservice";
import * as _ from 'lodash';
import {Observable} from "rxjs";

@Injectable()
export class UsersModel extends Collection {
    constructor(http:Http, apiService:ApiService) {
        super(http, ContivGlobals.USERS_ENDPOINT, apiService);
    }

    /**
     * Generate key for application group
     * @param group
     */
    generateKey(user) {
        return user.tenantName + ':' + user.username;
    }

    create(model, url): Promise<any>{
        var url:any;
        url = ContivGlobals.USERS_ENDPOINT;
        return super.create(model,url,'username');
    }

    getModelByKey(key, reload, keyname):Promise<any> {
        return super.getModelByKey(key, false, keyname);
    }

    saveuser(model):Promise<any> {
        var collection = this;
        var url = ContivGlobals.USERS_ENDPOINT + '/' +model['username'];
        return this.apiService.patch(url, model).map((res:Response) => res.json()).toPromise()
            .then((result) => {
                _.remove(collection.models, function (n) {
                    return n['username'] == model['username'];
                });
                collection.models.push(result);
                return result;
            });
    }


    delete(model):Promise<any>{
        var url = ContivGlobals.USERS_ENDPOINT + '/' + model['username'];
        return super.deleteUsingKey(model.username,'username',url)
    }
}