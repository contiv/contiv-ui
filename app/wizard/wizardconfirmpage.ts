/**
 * Created by cshampur on 10/30/16.
 */


import {Component, OnInit, Output, EventEmitter, Inject} from "@angular/core";
import {WizardService} from "./wizardservice";
import {Router, ActivatedRoute} from "@angular/router";
import {AuthService} from "../components/utils/authservice";
declare var jQuery:any;

@Component({
    selector: 'wizardconfirmpage',
    templateUrl: 'wizard/wizardconfirmpage.html'
})

export class WizardConfirmComponent implements OnInit{
    private wizardService: WizardService;
    public showLoader: boolean
    @Output('updatePage') updatePage: EventEmitter<any>;
    constructor(wizardservice: WizardService,
                private router: Router,
                private activatedRoute: ActivatedRoute){
        this.wizardService = wizardservice;
        this.updatePage = new EventEmitter<any>();
        this.showLoader = false;
    }

    ngOnInit(){
    }

    process(){
        this.updatePage.emit(4);
        // Will be calling the update settings funciton of wizard service,
        // A loader will be shown un til all the updates are completed.
        this.showLoader = true;

        /*
        this.wizardService.updateSettings()
            .then((result) => {
                this.loadDashboard();
            }, (error) => {
                this.loadDashboard();
            });
        */
        this.loadDashboard();
    }

    loadDashboard(){
        this.showLoader = false;
        jQuery(".ui.fullscreen.modal").modal('hide');
        localStorage.setItem('firstRun', '');
        this.router.navigate(['/m/dashboard']);
    }

    goBack(){
        this.updatePage.emit(2);
    }
}