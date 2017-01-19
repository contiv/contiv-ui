/**
 * Created by vjain3 on 5/19/16.
 */
import { Component, Inject, ViewEncapsulation, OnInit, OnChanges, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../components/utils/authservice";
import { ContivGlobals } from "../components/models/contivglobals";
import {ChartService} from "../components/utils/chartservice";
import {UserDisplayType} from "../components/directives/settings/userdetailscomponent";
declare var jQuery:any;

@Component({
    selector: 'menu',
    templateUrl: './menu.html'
})

export class MenuComponent implements DoCheck{
    public username: string;
    public product_name:string = ContivGlobals.PRODUCT_NAME;
    public firstRun: boolean;
    public UserDisplayType = UserDisplayType;

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private authService: AuthService,
                private chartService: ChartService) {
        this.username = authService.authTokenPayload['username'];
    }

    ngOnInit(){
        this.firstRun = this.authService.firstRun;
        jQuery('.ui.dropdown').dropdown({action: 'hide'});
    }

    ngDoCheck(){
        this.firstRun = this.authService.firstRun;
    }

    logout() {
        this.authService.logout();
        this.chartService.cleanBuffer();
        this.router.navigate(['/logout'],{relativeTo: this.activatedRoute});
    }

    closeProfile(){
        jQuery('#user-profile-modal').modal('hide');
    }
}