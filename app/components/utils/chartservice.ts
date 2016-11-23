import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Subscription, Observable, Subject} from "rxjs";
import {AuthService} from "./authservice";
import {ContivGlobals} from "../models/contivglobals";
import {ApiService} from "./apiservice";
import {isUndefined} from "util";

@Injectable()
export class ChartService {
    private refresh: Subscription;
    private networks: any;
    private netInspect: any;
    public graphData: {};
    public source: Subject<any>;
    public stream: Observable<any>;
    constructor(private authService: AuthService,
                private apiService: ApiService){
        this.networks = [];
        this.netInspect = {};
        this.graphData = {Network: {}, ApplicationGroup: {}};
        this.source = new Subject<any>();
        this.stream = this.source.asObservable();
        Observable.interval(5000).subscribe(() => {
            if (this.authService.isLoggedIn){
                this.getInspectData(ContivGlobals.NETWORKS_ENDPOINT, ContivGlobals.NETWORKS_INSPECT_ENDPOINT);
                this.getInspectData(ContivGlobals.APPLICATIONGROUPS_ENDPOINT, ContivGlobals.APPLICATIONGROUPS_INSPECT_ENDPOINT);
            }
        });
        if (this.authService.isLoggedIn){
            this.getInspectData(ContivGlobals.NETWORKS_ENDPOINT, ContivGlobals.NETWORKS_INSPECT_ENDPOINT);
            this.getInspectData(ContivGlobals.APPLICATIONGROUPS_ENDPOINT, ContivGlobals.APPLICATIONGROUPS_INSPECT_ENDPOINT);
        }
    }

    private getInspectData(listEndPoint:string, inspectEndpoint:string){
        this.apiService.get(listEndPoint)
            .map((res: Response) => res.json())
            .subscribe((result1) => {
                for(var x of result1){
                    var key = x['key'];
                    this.apiService.get(inspectEndpoint + key + '/')
                        .map((res: Response) => res.json())
                        .subscribe((result2) => {
                            var inspectkey = result2['Config']['key'];
                            var type = 'Network';
                            if(!isUndefined(result2['Config']['groupName']))
                                type = 'ApplicationGroup'
                            if(!isUndefined(result2['Oper']['numEndpoints'])){
                                this.generateGraphData(inspectkey, result2['Oper']['numEndpoints'], type);
                            }
                            else{
                                this.generateGraphData(inspectkey, 0, type);
                            }
                        })
                }
            })

    }

    generateGraphData(key: string, count: number, type: string){
        if(isUndefined(this.graphData[type][key])){
            this.graphData[type][key]=[];
            for(var i=0; i<15; i++){
                this.graphData[type][key].push(count)
            }
        }
        else{
            this.graphData[type][key].push(count);
            this.source.next({iKey: key, count: count, type: type});
        }
    }
}