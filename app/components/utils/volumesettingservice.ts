import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { ContivGlobals } from "../models/contivglobals";
import {ApiService} from "./apiservice";

@Injectable()
export class VolumeSettingService {

    constructor(private http: Http, private apiService: ApiService) {}

    getSettings() {
        var volumeservice = this;
        let promise = new Promise(function (resolve, reject) {
            let url = ContivGlobals.VOLUMES_GLOBAL_ENDPOINT;
            volumeservice.apiService.get(url).map((res: Response) => res.json()).toPromise()
                .then(function successCallback(result) {
                resolve(result);
            }, function errorCallback(result) {
                reject(result);
            });
        });


        return promise;
    }

    updateSettings(setting) {
        return this.apiService.post(ContivGlobals.VOLUMES_GLOBAL_ENDPOINT, setting)
            .map((res: Response) => res.json()).toPromise();
    }
}