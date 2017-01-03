/**
 * Created by vjain3 on 5/11/16.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Collection} from "./collection";
import { ContivGlobals } from "./contivglobals";

@Injectable()
export class ServicelbsModel extends Collection {
    constructor(http: Http) {
        super(http, ContivGlobals.SERVICELBS_ENDPOINT);
    }
}
