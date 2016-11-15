/**
 * Created by cshampur on 10/30/16.
 */


import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {WizardService, Server} from "./wizardservice";
@Component({
    selector: 'wizardpage1',
    templateUrl: 'wizard/wizardpage1.html'
})

export class Wizardpage1Component{
    @Output('updatePage') updatePage: EventEmitter<any>;
    constructor(){
        this.updatePage = new EventEmitter<any>();
    }

    process(){
        this.updatePage.emit(1);
    }

}