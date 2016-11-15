/**
 * Created by cshampur on 10/30/16.
 */


import {Component, OnInit, EventEmitter, Output} from "@angular/core";
import {WizardService} from "./wizardservice";
import {ContivGlobals} from "../components/models/contivglobals";
@Component({
    selector: 'wizardpage2',
    templateUrl: 'wizard/wizardpage2.html'
})

export class Wizardpage2Component implements OnInit{
    private wizardService: WizardService;
    public setting: any;
    @Output('updatePage') updatePage: EventEmitter<any>;

    constructor(wizardService: WizardService){
        this.wizardService = wizardService;
        this.setting = this.wizardService.setting;
        this.updatePage = new EventEmitter<any>()
    }
    ngOnInit(){
        this.setting = this.wizardService.setting;
    }

    updateNetworkSettings(setting: any){
        this.wizardService.setting = setting;
        this.updatePage.emit(2);
    }

    goBack(){
        this.updatePage.emit(0);
    }
}