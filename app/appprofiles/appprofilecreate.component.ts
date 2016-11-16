import { Component, Inject, OnInit, NgZone } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import * as _ from 'lodash';
import { CRUDHelperService } from "../components/utils/crudhelperservice";
import { AppProfilesModel } from "../components/models/appprofilesmodel";
import { ApplicationGroupsModel } from "../components/models/applicationgroupsmodel";

@Component({
    selector: 'appprofilecreate',
    templateUrl: 'appprofiles/appprofilecreate.html'
})

export class AppProfileCreateComponent {
    newAppProfile:any = {};
    applicationGroups:any[] = [];

    constructor(private activatedRoute:ActivatedRoute,
                private router:Router,
                private crudHelperService:CRUDHelperService,
                private appProfilesModel:AppProfilesModel,
                private applicationGroupsModel:ApplicationGroupsModel,
                private ngZone:NgZone) {
        var component = this;

        /**
         * Get application groups.
         */
        function getApplicationGroups() {
            applicationGroupsModel.get(false).then(function (result) {
                component.applicationGroups = _.filter(result, function(group) {
                    return _.isEmpty(group['links'].AppProfile); //TODO: Add tenant name as filter
                });
            });
        }

        function resetForm() {
            crudHelperService.stopLoader(component);
            crudHelperService.hideServerError(component);
            component.newAppProfile = {
                key: '',
                appProfileName: '',
                endpointGroups: [],
                tenantName: 'default'//TODO: Remove hardcoded tenant.
            };
        }

        getApplicationGroups();
        resetForm();
    }

    returnToAppProfiles() {
        this.router.navigate(['../list'], {relativeTo: this.activatedRoute});
    }

    cancelCreating() {
        this.returnToAppProfiles();
    }

    createAppProfile(formvalid:boolean) {
        var component = this;
        if (formvalid) {
            this.crudHelperService.startLoader(this);
            this.crudHelperService.hideServerError(this);
            component.newAppProfile.key = this.appProfilesModel.generateKey(this.newAppProfile);
            this.appProfilesModel.create(component.newAppProfile, undefined)
                .then((result) => {
                    component.ngZone.run(() => {
                        component.crudHelperService.stopLoader(component);
                    });
                    component.returnToAppProfiles();
                }, (error) => {
                    component.ngZone.run(() => {
                        component.crudHelperService.stopLoader(component);
                    });
                    component.crudHelperService.showServerError(component, error);
                });
        }
    }

}