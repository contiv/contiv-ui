/**
 * Created by cshampur on 10/29/16.
 */


import {Injectable} from "@angular/core";

export interface Server{
    name: string;
    ipaddress: string;
}

export interface NetworkDefaults{
    networkInfraType: string;
    vlans: string;
    vxlans: string;
    fwdMode: string;
}

@Injectable()
export class WizardService{
    public server:Server;
    public settings: NetworkDefaults;
    constructor(){
        this.server = {name: '', ipaddress: ''};
        this.settings = {networkInfraType: '', vlans: '', vxlans: '', fwdMode: ''};
    }
}