/**
 * Created by vjain3 on 11/11/16.
 */
import { Component, Input, OnChanges } from '@angular/core';
import * as _ from 'lodash';
import { ApplicationGroupsModel } from "../components/models/applicationgroupsmodel";


@Component({
    selector: 'ctv-appgroupselection',
    templateUrl: 'appprofiles/appgroupselection.html'
})
export class ApplicationGroupSelectionComponent implements OnChanges {
    @Input() mode:string;
    @Input() appProfile:any;

    applicationGroups:any[] = [];          // To Get all application groups of tenant
    applicationGroupSearchText:string = '';

    selectedApplicationGroups:any[] = [];

    constructor(private applicationGroupsModel:ApplicationGroupsModel) {
        var component = this;

        /**
         * Get application groups for the given tenant.
         */
        function getApplicationGroups() {
            component.applicationGroupsModel.get(false).then(function (result) {
                component.applicationGroups = _.filter(result, {
                    'tenantName': 'default'//TODO: Remove hardcoded tenant.
                });
            });
        }

        getApplicationGroups();
    }

    ngOnChanges() {
        var component = this;
        component.selectedApplicationGroups = _.filter(component.applicationGroups, function(group) {
            return _.includes(component.appProfile.endpointGroups, group['groupName']);
        });
    }

    /**
     * Add group to app profile
     */
    addApplicationGroup(groupName: string) {
        var component = this;
        var currentGroupName = groupName;

        if (currentGroupName !== undefined && !_.includes(component.appProfile.endpointGroups, currentGroupName)) {
            let key = 'default:' + currentGroupName;
            component.applicationGroupsModel.getModelByKey(key, false, undefined).then(function (group) {
                component.selectedApplicationGroups.push(group);
                component.selectedApplicationGroups = component.selectedApplicationGroups.slice();
            });
            //To be added to application group and saved to the server
            component.appProfile.endpointGroups.push(currentGroupName);
        }
    };

    /**
     * Remove group from app profile
     */
    removeApplicationGroup(groupName: string) {
        _.remove(this.selectedApplicationGroups, function (group) {
            return group['groupName'] === groupName;
        });
        this.selectedApplicationGroups = this.selectedApplicationGroups.slice();
        _.remove(this.appProfile.endpointGroups, function (group) {
            return group === groupName;
        });
    };
}