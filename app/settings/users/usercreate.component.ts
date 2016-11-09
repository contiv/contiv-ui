import { Component, Inject, OnInit, NgZone } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CRUDHelperService } from "../../components/utils/crudhelperservice";
import { UsersModel } from "../../components/models/usersmodel";

@Component({
    selector: 'usercreate',
    templateUrl: 'settings/users/usercreate.html'
})

export class UserCreateComponent{
    public newUser: any = {};

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private crudHelperService: CRUDHelperService,
                private usersModel: UsersModel,
                private ngZone: NgZone){
        var component = this;

        function resetForm() {
            crudHelperService.stopLoader(component);
            crudHelperService.hideServerError(component);
            component.newUser = {
                userName: '',
                firstName: '',
                lastName: '',
                role: 'DevOps',
                tenantName: 'default'//TODO: Remove hardcoded tenant.
            };
        }

        resetForm();
    }

    returnToUsers(){
        this.router.navigate(['../list'], { relativeTo: this.activatedRoute });
    }

    cancelCreating(){
        this.returnToUsers();
    }

    createUser(formvalid: boolean){
        var component = this;
        if(formvalid){
            this.crudHelperService.startLoader(this);
            this.crudHelperService.hideServerError(this);
            component.newUser.key = this.usersModel.generateKey(this.newUser);
            this.usersModel.create(component.newUser,undefined)
                .then((result) => {
                    component.ngZone.run(() => {
                        component.crudHelperService.stopLoader(component);
                    });
                    component.returnToUsers();
                }, (error) => {
                    component.ngZone.run(() => {
                        component.crudHelperService.stopLoader(component);
                    });
                    component.crudHelperService.showServerError(component,error);
                });
        }
    }

}