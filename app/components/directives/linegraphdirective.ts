/**
 * Created by cshampur on 11/16/16.
 */

import {Component, OnInit, DoCheck, Input, OnDestroy, NgZone} from "@angular/core";
import {ChartService} from "../utils/chartservice";
import {Subscription} from "rxjs";
import {isUndefined} from "util";
import {isNull} from "util";
@Component({
    selector: 'linegraph',
    templateUrl: 'components/directives/linegraph.html',
    styleUrls: ['components/directives/linegraph.css']
})

export class LineGraphDirective implements OnInit, DoCheck, OnDestroy{
    private prevKey: string;
    @Input('key') key: string;
    @Input('endpointType') endpointType: string;
    private prevEndpointType: string;
    public inspectActivated: boolean;
    private subscription: Subscription;
    private start: number;
    private end: number;
    private graphData: any;
    public lineChartData:Array<any>;
    public lineChartLabels:Array<any>;
    public lineChartOptions:any = {
        animation: false,
        responsive: true,
    };
    public lineChartColors:Array<any> = [
        { // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        }
    ];
    public lineChartLegend:boolean = true;
    public lineChartType:string = 'line';
    constructor(private chartService: ChartService){
        this.lineChartData = [{
            label: '# of Endpoints',
            data: [2, 2, 2, 2]
        }];
        this.lineChartLabels = ['0T', '1T', '2T', '3T'];
        this.inspectActivated = false;
        this.prevKey = '';
        this.key = '';
        this.endpointType = 'Network';
        this.prevEndpointType = ''
        this.graphData = {
                            Network: {data:[],label:[]},
                            ApplicationGroup: {data:[],label:[]}
                         };
    }

    ngOnInit(){
        this.prevKey = this.key;
        this.prevEndpointType = this.endpointType;
        var self = this;
        this.subscription = this.chartService.stream.subscribe((result) => {
            var resultKey = result['iKey'];
            var resultEndpointType = result['type'];
            var currKey = self.key;
            var currEndpointType = self.endpointType;
            if(resultKey===currKey && resultEndpointType === currEndpointType){
                self.graphData[currEndpointType].data.push(result['count']);
                self.graphData[currEndpointType].label.push(self.graphData[currEndpointType].label.length + 'T');
                if (!self.inspectActivated){
                    self.start++;
                    self.end++;
                    self.lineChartData[0]['data'].shift();
                    self.lineChartData[0]['data'].push(result['count']);
                    var tempdata = self.lineChartData[0]['data'].slice();
                    self.lineChartData[0]['data']=[];
                    self.lineChartData[0]['data']=tempdata;
                    self.lineChartLabels.shift();
                    self.lineChartLabels.push(self.graphData[currEndpointType].label.length - 1 + 'T' );
                    var  templabel = self.lineChartLabels.slice();
                    self.lineChartLabels = [];
                    self.lineChartLabels = templabel;
                }
            }
        });
    }

    ngDoCheck(){
        if((this.key != '') && (!isUndefined(this.key)) && (!isNull(this.key)))
            if(this.key!==this.prevKey){
                if(!isUndefined(this.chartService.graphData[this.endpointType][this.key]))
                    this.prepareChartData();
            }
    }

    prepareChartData(){
        this.inspectActivated = false;
        this.graphData[this.endpointType].data = this.chartService.graphData[this.endpointType][this.key].slice();
        this.graphData[this.endpointType].label = this.chartService.graphData[this.endpointType][this.key].map((curr,index) => {
            return index + 'T';
        });
        this.end = this.graphData[this.endpointType].data.length - 1;
        this.start = this.end - 14 ;
        this.lineChartData[0]['data'] = [];
        this.lineChartLabels = [];
        for(var i= this.start; i<=this.end; i++){
            this.lineChartData[0]['data'].push(this.graphData[this.endpointType].data[i]);
            this.lineChartLabels.push(this.graphData[this.endpointType].label[i]);
        }
        this.prevKey = this.key;
        this.prevEndpointType = this.endpointType;
    }

    leftpress(){
        if (this.start > 0){
            this.inspectActivated = true;
            this.start--;
            this.end--;
            this.lineChartData[0]['data'] = [];
            this.lineChartLabels = [];
            for(var i=this.start; i<=this.end; i++){
                this.lineChartData[0]['data'].push(this.graphData[this.endpointType].data[i]);
                this.lineChartLabels.push(this.graphData[this.endpointType].label[i]);
            }
        }
    }

    rightpress(){
        if(this.end < (this.graphData[this.endpointType].data.length - 1)){
            this.end++;
            this.start++;
            this.lineChartData[0]['data'] = [];
            this.lineChartLabels = [];
            for(var i=this.start; i<=this.end; i++){
                this.lineChartData[0]['data'].push(this.graphData[this.endpointType].data[i]);
                this.lineChartLabels.push(this.graphData[this.endpointType].label[i]);
            }
            if(this.end == (this.graphData[this.endpointType].data.length - 1))
                this.inspectActivated = false;
        }
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}