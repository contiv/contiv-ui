/**
 * Created by vjain3 on 4/29/16.
 */
import { Injectable } from '@angular/core';
declare var jQuery:any;

@Injectable()
export class CRUDHelperService {

    public message:string = '';
    public item:string = '';
    public displayNotifi:boolean;
    public notifyType: string = '';

    constructor(){
    }

    startLoader(controller) {
        controller.showLoader = true;
    }

    stopLoader(controller) {
        controller.showLoader = false;
    }

    showNotification(message: string, item: string, notifyType?: string){
        this.message = message;
        this.item = item;
        this.notifyType = notifyType;
        this.displayNotifi = true;
    }

    showServerError(message, error): void{
        var status = error.status;
        var operationstate = ''
        if (status=='401' || status=='402'){
            operationstate = 'Unauthorized Operation';
        }
        if(error.text().length > 0)
            operationstate = error.text();
        else
            operationstate = error.toString();
        this.showNotification(message, operationstate, 'alert');
    }
}