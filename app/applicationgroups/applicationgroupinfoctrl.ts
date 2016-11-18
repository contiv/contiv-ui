/**
 * Created by cshampur on 11/18/16.
 */


import {Component, Input} from "@angular/core";
@Component({
    selector: 'applicationgroupinfo',
    templateUrl: 'applicationgroups/applicationgroupinfo.html'
})

export class ApplicationGroupInfoComponent{
    @Input('applicationInfoCtrl') applicationInfoCtrl: any;
    constructor(){
        this.applicationInfoCtrl = {
            applicationGroup:{
                groupName: '',
                networkName: ''
            },
            showLoader: true,
            showServerError: false,
            mode: 'details',
            serverErrorMessage: ''
        }
    }
}