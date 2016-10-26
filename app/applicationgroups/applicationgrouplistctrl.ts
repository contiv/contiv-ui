/**
 * Created by vjain3 on 3/11/16.
 */

import {Component, OnInit, OnDestroy, Inject} from "@angular/core";
import {ApplicationGroupsModel} from "../components/models/applicationgroupsmodel";
import {CRUDHelperService} from "../components/utils/crudhelperservice";
import {Observable, Subscription} from "rxjs";
import { StateService } from "angular-ui-router/commonjs/ng1";

@Component({
    selector:'app-group',
    template: require("./applicationgrouplist.html")
})

export class AppGrouplistComponent implements OnInit, OnDestroy{
    public applicationGroupListCtrl: any;
    private appGroupModel: ApplicationGroupsModel;
    private crudHelperService: CRUDHelperService;
    private refresh: Subscription;

    constructor(@Inject('$state') private $state: StateService,
                appGroupModel: ApplicationGroupsModel,
                crudHelperService:CRUDHelperService){
        debugger;
        this.appGroupModel = appGroupModel;
        this.crudHelperService = crudHelperService;
        this.applicationGroupListCtrl = this;
        this['showLoader'] = true;

        this.refresh = Observable.interval(5000).subscribe(() => {
            this.getApplicationGroup(true);
        });
    }

    ngOnInit(){
        this.crudHelperService.startLoader(this);
        this.getApplicationGroup(false);
    }

    getApplicationGroup(reload: boolean){
        debugger;
        var applicationGroupListCtrl = this;
        this.appGroupModel.get(reload)
            .then((result) => {
                applicationGroupListCtrl['groups']=result;
                applicationGroupListCtrl.crudHelperService.stopLoader(applicationGroupListCtrl);
            }, (error) => {
                applicationGroupListCtrl.crudHelperService.stopLoader(applicationGroupListCtrl);
            });
    }

    create(){
        this.$state.go('contiv.menu.applicationgroups.create');
    }

    ngOnDestroy(){
        this.refresh.unsubscribe();
    }

}

