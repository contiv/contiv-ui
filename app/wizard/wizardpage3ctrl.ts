/**
 * Created by cshampur on 10/30/16.
 */


import {Component, OnInit, Output, EventEmitter, Inject} from "@angular/core";
import {WizardService} from "./wizardservice";
import {Router, ActivatedRoute} from "@angular/router";
import {AuthService} from "../components/utils/authservice";
declare var jQuery:any;

@Component({
    selector: 'wizardpage3',
    templateUrl: 'wizard/wizardpage3.html'
})

export class Wizardpage3Component implements OnInit{
    private wizardService: WizardService;
    @Output('updatePage') updatePage: EventEmitter<any>;
    constructor(wizardservice: WizardService,
                private router: Router,
                private activatedRoute: ActivatedRoute){
        this.wizardService = wizardservice;
        this.updatePage = new EventEmitter<any>();
    }

    ngOnInit(){
    }

    process(){
        this.updatePage.emit(3);
        jQuery(".ui.large.modal").modal('hide');
        localStorage.setItem('firstRun', '');
        this.router.navigate(['/m/dashboard']);
    }

    goBack(){
        this.updatePage.emit(1);
    }
}