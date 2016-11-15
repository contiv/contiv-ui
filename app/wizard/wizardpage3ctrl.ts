/**
 * Created by cshampur on 10/30/16.
 */


import {Component, OnInit, EventEmitter, Output} from "@angular/core";
import {WizardService} from "./wizardservice";
import {ContivGlobals} from "../components/models/contivglobals";
@Component({
    selector: 'wizardpage3',
    templateUrl: 'wizard/wizardpage3.html'
})

export class Wizardpage3Component implements OnInit{
    private wizardService: WizardService;
    public extra_vars: any;
    @Output('updatePage') updatePage: EventEmitter<any>;

    constructor(wizardService: WizardService){
        this.wizardService = wizardService;
        this.extra_vars = this.wizardService.extra_vars;
        this.updatePage = new EventEmitter<any>()
    }
    ngOnInit(){
        this.extra_vars = this.wizardService.extra_vars;
    }

    updateAciSettings(extra_vars: any){
        this.wizardService.extra_vars = extra_vars;
        this.updatePage.emit(3);
    }

    goBack(){
        this.updatePage.emit(1);
    }
}