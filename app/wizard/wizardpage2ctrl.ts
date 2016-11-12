/**
 * Created by cshampur on 10/30/16.
 */


import {Component, OnInit, EventEmitter, Output} from "@angular/core";
import {WizardService, NetworkDefaults} from "./wizardservice";
import {ContivGlobals} from "../components/models/contivglobals";
@Component({
    selector: 'wizardpage2',
    templateUrl: 'wizard/wizardpage2.html'
})

export class Wizardpage2Component implements OnInit{
    private wizardService: WizardService;
    public setting: NetworkDefaults;
    @Output('updatePage') updatePage: EventEmitter<any>;
    vlanPattern:string = ContivGlobals.VLAN_REGEX;
    vxlanPattern:string = ContivGlobals.VXLAN_REGEX;

    constructor(wizardService: WizardService){
        this.wizardService = wizardService;
        this.setting = this.wizardService.settings;
        this.updatePage = new EventEmitter<any>()
    }
    ngOnInit(){
        this.setting = this.wizardService.settings;
    }

    updateNetworkSettings(formvalid: boolean){
        if(formvalid){
            this.updatePage.emit(2);
        }
    }

    goBack(){
        this.updatePage.emit(0);
    }
}