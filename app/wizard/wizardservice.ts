/**
 * Created by cshampur on 10/29/16.
 */


import {Injectable, OnInit} from "@angular/core";
import {NetworkService} from "../components/utils/networkservice";

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
    public setting: any;
    constructor(private networkService: NetworkService){
        this.server = {name: '', ipaddress: ''};
        this.setting = {networkInfraType: '', vlans: '', vxlans: '', fwdMode: ''};
    }

    getNetworkSettings(){
        this.networkService.getSettings()
            .then((result) => {
                this.setting = result;
            }
        )
    }

}