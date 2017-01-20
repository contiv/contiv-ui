/**
 * Created by vjain3 on 5/19/16.
 */
import { Component, Inject, ViewEncapsulation, OnInit, OnChanges, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../components/utils/authservice";
import { ContivGlobals } from "../components/models/contivglobals";
import { ChartService } from "../components/utils/chartservice";
import { ProfileDisplayType } from "../components/directives/settings/userprofileedit";
import { NetworksModel } from "../components/models/networksmodel";
import { ApplicationGroupsModel } from "../components/models/applicationgroupsmodel";
import { AppProfilesModel } from "../components/models/appprofilesmodel";
import { AuthorizationModel } from "../components/models/authorizationmodel";
import { BgpsModel } from "../components/models/bgpsmodel";
import { ContractGroupsModel } from "../components/models/contractgroupsmodel";
import { NetprofilesModel } from "../components/models/netprofilesmodel";
import { OrganizationsModel } from "../components/models/organizationsmodel";
import { PoliciesModel } from "../components/models/policiesmodel";
import { RulesModel } from "../components/models/rulesmodel";
import { ServicelbsModel } from "../components/models/servicelbsmodel";
import { UsersModel } from "../components/models/usersmodel";
declare var jQuery:any;

@Component({
    selector: 'menu',
    templateUrl: './menu.html',
    styleUrls: ['./menu.css']
})

export class MenuComponent implements DoCheck{
    public username: string;
    public product_name:string = ContivGlobals.PRODUCT_NAME;
    public firstRun: boolean;
    public ProfileDisplayType = ProfileDisplayType;

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private authService: AuthService,
                private chartService: ChartService,
                private networksModel: NetworksModel,
                private applicationgroupsModel: ApplicationGroupsModel,
                private appprofilesModel: AppProfilesModel,
                private authorizationModel: AuthorizationModel,
                private bgpsModel: BgpsModel,
                private contractgroupsModel: ContractGroupsModel,
                private netprofilesModel: NetprofilesModel,
                private organizationsmodel: OrganizationsModel,
                private policiesModel: PoliciesModel,
                private rulesModel: RulesModel,
                private servicelbsModel: ServicelbsModel,
                private usersModel: UsersModel) {
        this.username = authService.authTokenPayload['username'];
        jQuery('#user-profile-modal').modal({onHide: ($event) => {return true;}});
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
        this.networksModel.clearModel();
        this.applicationgroupsModel.clearModel();
        this.appprofilesModel.clearModel();
        this.authorizationModel.clearModel();
        this.bgpsModel.clearModel();
        this.contractgroupsModel.clearModel();
        this.netprofilesModel.clearModel();
        this.organizationsmodel.clearModel();
        this.policiesModel.clearModel();
        this.rulesModel.clearModel();
        this.servicelbsModel.clearModel();
        this.usersModel.clearModel();
        this.router.navigate(['/logout'],{relativeTo: this.activatedRoute});
    }

    closeProfile(){
        jQuery('#user-profile-modal').modal('hide');
    }
}