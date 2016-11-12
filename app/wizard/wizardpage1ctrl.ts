/**
 * Created by cshampur on 10/30/16.
 */


import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {WizardService, Server} from "./wizardservice";
@Component({
    selector: 'wizardpage1',
    templateUrl: 'wizard/wizardpage1.html'
})

export class Wizardpage1Component implements OnInit{
    private wizardService: WizardService;
    public server: Server;
    @Output('updatePage') updatePage: EventEmitter<any>;
    constructor(wizardservice: WizardService){
        this.wizardService = wizardservice;
        this.server = wizardservice.server;
        this.updatePage = new EventEmitter<any>();
    }

    ngOnInit(){
        this.server = this.wizardService.server;
    }

    process(formvalid: boolean){
        if(formvalid){
            this.updatePage.emit(1);
        }
    }

}