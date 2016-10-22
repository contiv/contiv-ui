import {Component, Inject, OnInit, OnDestroy} from "@angular/core";
import {CRUDHelperService} from "../components/utils/crudhelperservice";
import {Subscription, Observable} from "rxjs";
import {NetworksModel} from "../components/models/networksmodel";
import { StateService } from "angular-ui-router/commonjs/ng1";
import {InspectService} from "../components/utils/inspectservice";
import {isUndefined} from "util";

@Component({
    selector: 'networkstat',
    templateUrl: 'networks/networkstats.html'
})
export class NetworkStatComponent implements OnInit, OnDestroy{

    public networkStatsCtrl: any;
    private crudHelperService: CRUDHelperService;
    private refresh: Subscription;
    private networksModel: NetworksModel;
    private inspectSerrvice: InspectService;
    networkInspectStats:any; config:any; endpoints:any; filteredendpoints:any; containerDetails:any;
    constructor(networksModel: NetworksModel,
                @Inject('$state') private $state: StateService,
                crudHelperService: CRUDHelperService,
                inspectSerrvice: InspectService){
        this.crudHelperService = crudHelperService;
        this.networksModel = networksModel;
        this.inspectSerrvice = inspectSerrvice;
        this['showloader'] = true;
        this.refresh = Observable.interval(5000).subscribe(() => {
            this.getNetworkInspect(true);
        })
        this.networkInspectStats= {
                    allocatedAddressesCount: '',
                    allocatedIPAddresses: '',
                    dnsServerIP: '',
                    externalPktTag: '',
                    numEndpoints: '',
                    pktTag: ''
            }
        this.config = {networkName: '',}
        this.endpoints = []
        this.filteredendpoints = []
        this.containerDetails= {}
        this.networkStatsCtrl = this;

    }

    ngOnInit(){
        this.crudHelperService.startLoader(this);
        this.getNetworkInspect(false);
    }

    getNetworkInspect(reload: boolean){
        var networkStatsCtrl = this;
        this.networksModel.getInspectByKey(this.$state.params['key'],
            ContivGlobals.NETWORKS_INSPECT_ENDPOINT, reload)
            .then((result) => {
                    networkStatsCtrl['networkInspectStats'] = result['Oper'];
                    networkStatsCtrl['config'] = result['Config'];
                    if(!isUndefined(result['Oper'].endpoints)){
                        var containerDetails = networkStatsCtrl.inspectSerrvice.buildEndPoints(result['Oper'].endpoints);
                        if(networkStatsCtrl.inspectSerrvice.checkContainerChanged(networkStatsCtrl['containerDetails'],containerDetails)){
                            networkStatsCtrl['endpoints'] = result['Oper'].endpoints;
                            networkStatsCtrl['containerDetails'] = containerDetails;
                        }
                    }
                    else{
                        networkStatsCtrl['endpoints'] = []
                        networkStatsCtrl['containerDetails'] = {};
                    }
                    networkStatsCtrl.crudHelperService.stopLoader(networkStatsCtrl);
                },
                (error) => {
                    networkStatsCtrl.crudHelperService.stopLoader(networkStatsCtrl);
                });
    }

    ngOnDestroy(){
        this.refresh.unsubscribe();
    }
}