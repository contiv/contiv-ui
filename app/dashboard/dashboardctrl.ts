/**
 * Created by vjain3 on 3/11/16.
 */
import {Component, OnDestroy, NgZone} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ApplicationGroupsModel } from "../components/models/applicationgroupsmodel";
import { PoliciesModel } from "../components/models/policiesmodel";
import { NetworksModel } from "../components/models/networksmodel";

//var Chart = require('chart.js');

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard/dashboard.html'

})
export class DashboardComponent implements OnDestroy {
    nodes: number = 0;
    networks: number = 0;
    volumes: number = 0;
    groups: number = 0;
    networkList: any;
    applicationGroupList: any;
    networkpolicies: number = 0;
    storagepolicies: number = 0;
    subscription: Subscription;
    endpointType: string;
    public key: string;

    constructor(private networksModel:NetworksModel,
                private applicationGroupsModel:ApplicationGroupsModel,
                private policiesModel:PoliciesModel,
                private ngZone:NgZone) {
        var dashboardComponent = this;
        this.networkList = [];
        this.applicationGroupList = []
        this.endpointType = 'Network';
        this.key = '';
        function getDashboardInfo(reload) {
            ngZone.run(() => {
                networksModel.get(reload)
                    .then(function (result) {
                        dashboardComponent.networks = result.length;
                        dashboardComponent.networkList = result;
                        if (result.length > 0 && dashboardComponent.key === '' && dashboardComponent.endpointType === 'Network'){
                            dashboardComponent.key = result[0]['key'];
                        }

                    });
                applicationGroupsModel.get(reload)
                    .then(function (result) {
                        dashboardComponent.groups = result.length;
                        dashboardComponent.applicationGroupList = result;
                    });
                policiesModel.get(reload)
                    .then(function (result) {
                        dashboardComponent.networkpolicies = result.length;
                    });
            })
        }

        //Load from cache for quick display initially
        getDashboardInfo(false);

        this.subscription = Observable.interval(5000000).subscribe(() => {
            getDashboardInfo(true);
        })
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    switch(endpointType: string){
        if(endpointType == 'Network'){
            if(this.endpointType !== 'Network'){
                this.endpointType = 'Network';
                if(this.networkList.length > 0)
                    this.key = this.networkList[0]['key'];
            }
        }
        else {
            if(this.endpointType !== 'ApplicationGroup'){
                this.endpointType = 'ApplicationGroup';
                if(this.applicationGroupList.length > 0)
                    this.key = this.applicationGroupList[0]['key'];
            }
        }
    }

}