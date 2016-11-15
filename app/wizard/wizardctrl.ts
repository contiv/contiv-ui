/**
 * Created by cshampur on 10/29/16.
 */



import {Component, OnInit, OnDestroy} from "@angular/core";
import {WizardService} from "./wizardservice";
declare var jQuery:any;

@Component({
    selector: 'wizard',
    templateUrl: 'wizard/wizard.html',
    styleUrls: ['wizard/wizard.css']
})

export class WizardComponent implements OnInit, OnDestroy{
    private wizardService: WizardService;
    public pageNo: number;
    constructor(wizardService: WizardService){
        this.wizardService = wizardService;
        this.pageNo = 1;
        wizardService.getNetworkSettings();
        wizardService.getAciSettings();
    }

    ngOnInit(){
    }

    public updatePage(pageno: number){
        this.pageNo = ++pageno;
    }

    ngOnDestroy(){
        jQuery(".ui.fullscreen.modal").remove();
    }
}