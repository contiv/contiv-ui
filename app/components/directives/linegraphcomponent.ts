/**
 * Created by cshampur on 11/16/16.
 */

import {Component, OnInit, DoCheck, Input, OnDestroy, NgZone} from "@angular/core";
import {ChartService, EndpointType} from "../utils/chartservice";
import {Subscription} from "rxjs";
import {isUndefined} from "util";
import {isNull} from "util";
@Component({
    selector: 'linegraph',
    templateUrl: 'components/directives/linegraph.html',
    styleUrls: ['components/directives/linegraph.css']
})

export class LineGraphComponent implements OnInit, DoCheck, OnDestroy{
    public EndpointType = EndpointType;
    private prevKey: string;
    @Input('key') key: string;
    @Input('endpointType') endpointType: EndpointType;
    private prevEndpointType: EndpointType;
    public inspectActivated: boolean;
    private subscription: Subscription;
    private start: number;
    private end: number;
    public lineChartData:Array<any>;
    public lineChartLabels:Array<any>;
    public lineChartOptions:any = {};
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
            data: [2, 2, 2, 2],
        }];
        this.adjustScale(100);
        this.lineChartLabels = ['0T', '1T', '2T', '3T'];
        this.inspectActivated = false;
        this.prevKey = '';
        this.key = '';
        this.endpointType = EndpointType.Network;
        this.prevEndpointType = EndpointType.Network;
    }

    ngOnInit(){
        this.prevKey = this.key;
        this.prevEndpointType = this.endpointType;
        this.subscription = this.chartService.stream.subscribe((result) => {
            var resultKey = result['iKey'];
            var resultEndpointType = result['type'];
            var currKey = this.key;
            var currEndpointType = this.endpointType;
            if(resultKey===currKey && resultEndpointType === currEndpointType){
                if (!this.inspectActivated){
                    this.start++;
                    this.end++;
                    this.loadGraphData();
                }
            }
        });
    }

    /*  This function is needed to redraw the chart after every update. The drawing is done
        using last 15 array values from chartservice.graphdata.
        eg:
        chartservice.graphdata = { 0:
                                        {   'contiv-net': [1,2,3,4,5...],
                                            'super-net': [1,2,3,4,5...]
                                        },
                                   1:
                                        {   'app-group1': [1,2,3,4,5...],
                                            'app-group2': [1,2,3,4,5...]
                                        }
                                 }
        In the above structure 0 represents enum EndpointType.Network;
                               1 represents enum EndpointType.ApplicationGroup;
     */
    private loadGraphData(){
        this.lineChartData[0]['data']=[];
        this.lineChartLabels = [];
        var max=0;
        for(var i= this.start; i<=this.end; i++){
            var endpointcount = this.chartService.graphData[this.endpointType][this.key][i];
            this.lineChartData[0]['data'].push(endpointcount);
            this.lineChartLabels.push(i + 'T');
            if(endpointcount > max){
                max = endpointcount;
            }
        }
        if(!isUndefined(this.lineChartOptions.scales)){
            var scaleMax = this.lineChartOptions.scales.yAxes[0].ticks.suggestedMax;
            if(max > scaleMax){
                this.adjustScale(max);
            }
        }
        else{
            this.adjustScale(max);
        }

    }

    /*
        This function is needed to update the Y-axes scale values so that the line
        is always within the boundry and there is significant change in offset of line
        when there is variation in the array values. This is needed since scale always begins at 0.
     */
    private adjustScale(max: number){
        this.lineChartOptions = {};
        this.lineChartOptions = {
            animation: false,
            responsive: true,
            scales: {
                yAxes: [{
                    type: 'linear',
                    ticks: {
                        beginAtZero: true,
                        suggestedMax: max * 1.5
                    }
                }]
            }
        }
    }

    ngDoCheck(){
        if((this.key != '') && (!isUndefined(this.key)) && (!isNull(this.key)))
            if((this.key!==this.prevKey) || (this.endpointType !== this.prevEndpointType)){
                if(!isUndefined(this.chartService.graphData[this.endpointType][this.key]))
                    this.prepareChartData();
            }
    }

    //  This function kind of resets the chart when different network or application group is selected.
    private prepareChartData(){
        this.inspectActivated = false;
        this.end = this.chartService.graphData[this.endpointType][this.key].length - 1;
        this.start = this.end - 14 ;
        this.lineChartOptions = {};
        this.loadGraphData();
        this.prevKey = this.key;
        this.prevEndpointType = this.endpointType;
    }


    leftpress(){
        if (this.start > 0){
            this.inspectActivated = true;
            this.start--;
            this.end--;
            this.loadGraphData();
        }
    }

    rightpress(){
        if(this.end < (this.chartService.graphData[this.endpointType][this.key].length - 1)){
            this.end++;
            this.start++;
            this.loadGraphData();
            if(this.end == (this.chartService.graphData[this.endpointType][this.key].length - 1))
                this.inspectActivated = false;

        }
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}