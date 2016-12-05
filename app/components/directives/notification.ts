/**
 * Created by cshampur on 11/30/16.
 */

import {Component, DoCheck, OnInit} from "@angular/core";
import {CRUDHelperService} from "../utils/crudhelperservice";
import {isUndefined} from "util";
declare var jQuery:any;

@Component({
    selector: 'notification',
    templateUrl: 'components/directives/notification.html',
    styleUrls: ['components/directives/notification.css']
})

export class NotificationComponent implements DoCheck, OnInit{
    public message: string = '';
    public item: string = '';
    private notifyId: number = 0
    public notifyType: string = 'alert';
    private notifyCounter: number = 0;
    constructor(private crudHelperService: CRUDHelperService){
    }

    ngOnInit(){
        jQuery('.notify').css(
            {   right:30+'px',
                top: ((80/100)*window.innerHeight) + 'px'
            });
        jQuery('.notify').css({visibility: 'hidden'});
        window.onresize = function(){
            jQuery('.notify').css(
                {   right:30+'px',
                    top: ((80/100)*window.innerHeight) + 'px'
                });
        }
        this.notifyId = 0;
    }

    runAnimation(start: boolean){
        var self = this;
        var animation = {
            animation: 'fly up',
            onStart: function(){
                if(start)
                    self.displayMessage();
            },
            onComplete:function(){
                if(!start)
                    self.displayMessage();
            }
        }
        jQuery('.notify').transition(animation);
    }

    displayMessage(){
        this.message = this.crudHelperService.message;
        this.item = this.crudHelperService.item;
        this.notifyType = this.crudHelperService.notifyType;
        if(isUndefined(this.notifyType))
            this.notifyType = 'confirm';
    }

    ngDoCheck(){
        var self = this;
        if (this.crudHelperService.displayNotifi){
            if (this.notifyId !== 0) {
                this.runAnimation(false);
                this.notifyId = 0;
            }

            this.crudHelperService.displayNotifi = false;
            this.runAnimation(true);
            var currentnotifyId = ++this.notifyCounter;
            this.notifyId = currentnotifyId;
            var newTimer = new notifyTimer(currentnotifyId);

        }

        function notifyTimer(timerId){
            var timerId = timerId;
            setTimeout(function(){
                if(timerId == self.notifyId){
                    self.runAnimation(false);
                    self.notifyId = 0;
                }
            },15000)
        }
    }


    close() {
        this.runAnimation(false);
        this.notifyId = 0;
    }
}

