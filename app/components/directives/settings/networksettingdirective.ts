/**
 * Created by cshampur on 11/14/16.
 */

import {Component, Input, Output, EventEmitter} from "@angular/core";
import {ContivGlobals} from "../../models/contivglobals";
import {NetworkService} from "../../utils/networkservice";

@Component({
    selector: 'networksettingdir',
    templateUrl: 'components/directives/settings/networksettingdir.html'
})

export class NetworkSettingDirective {
    @Input('firstRunWiz') firstRunWiz:boolean;
    @Input('setting') setting:any;
    @Output('updateNetDef') updateNetDef: EventEmitter<any>;
    @Output('backTriggered') backTriggered: EventEmitter<any>;
    vlanPattern:string = ContivGlobals.VLAN_REGEX;
    vxlanPattern:string = ContivGlobals.VXLAN_REGEX;
    constructor(private networkService:NetworkService){
        this.updateNetDef = new EventEmitter<any>();
        this.backTriggered = new EventEmitter<any>();
        this.firstRunWiz = false;
        this.setting = {networkInfraType: '', vlans: '', vxlans: '', fwdMode: ''};
    }

    updateNetworkSettings(formvalid: boolean){
        if(formvalid){
            this.updateNetDef.emit(this.setting);
        }
    }


}