/**
 * Created by cshampur on 10/14/16.
 */

import {Component, OnInit, OnDestroy, Inject, NgZone} from "@angular/core";

import {CRUDHelperService} from "../components/utils/crudhelperservice";
import {Observable, Subscription} from "rxjs";
import { StateService } from "angular-ui-router/commonjs/ng1";
import {OrganizationsModel} from "../components/models/organizationsmodel";


@Component({
    selector: 'organizationlist',
    templateUrl: 'organizations/organizationlist.html'
})

export class OrganizationListComponent implements OnInit, OnDestroy{
    private organizationsModel:OrganizationsModel;
    private crudHelperService: CRUDHelperService;
    public organizationsListCtrl: any;
    private refresh: Subscription;

    constructor(@Inject('$state') private $state: StateService,
                organizationsModel: OrganizationsModel,
                crudHelperService: CRUDHelperService,
                private ngZone: NgZone){
        this.organizationsModel = organizationsModel;
        this.crudHelperService = crudHelperService;
        this.organizationsListCtrl = this;
        this['showLoader']=true;
        this.refresh=Observable.interval(5000).subscribe(() => {
            this.getOrganizations(true);
        })
    }

    ngOnInit(){
        this.crudHelperService.startLoader(this);
        this.getOrganizations(false);
    }

    getOrganizations(reload: boolean){
        var organizationsListCtrl = this;
        this.organizationsModel.get(reload)
            .then(function successCallback(result){
                    organizationsListCtrl['organizations'] = result;
                    organizationsListCtrl.ngZone.run(() => {
                        organizationsListCtrl.crudHelperService.stopLoader(organizationsListCtrl);
                    });
                },
                function errorCallback(result){
                    organizationsListCtrl.ngZone.run(() => {
                        organizationsListCtrl.crudHelperService.stopLoader(organizationsListCtrl);
                    });
                });
    }

    create(){
        this.$state.go('contiv.menu.organizations.create');
    }

    ngOnDestroy(){
        this.refresh.unsubscribe();
    }
}