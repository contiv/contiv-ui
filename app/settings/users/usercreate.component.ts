import { Component, Inject, OnInit, NgZone } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CRUDHelperService } from "../../components/utils/crudhelperservice";
import { UsersModel } from "../../components/models/usersmodel";
import { OrganizationsModel } from "../../components/models/organizationsmodel";

export interface User{
    username: string;
    password?: string;
    first_name: string;
    last_name: string;
    disable: false;
}

@Component({
    selector: 'usercreate',
    templateUrl: 'settings/users/usercreate.html'
})

export class UserCreateComponent{
    newUser: User = {username: '', password: '', first_name: '', last_name: '', disable: false};
    organizations:any[] = [];

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private crudHelperService: CRUDHelperService,
                private usersModel: UsersModel,
                private organizationsModel: OrganizationsModel,
                private ngZone: NgZone){
        var component = this;

        /**
         * Get organizations.
         */
        function getOrganizations() {
            organizationsModel.get(false).then(function (result) {
                component.organizations = result;
            });
        }

        function resetForm() {
            crudHelperService.stopLoader(component);
            component.newUser = {
                username: '',
                password: '',
                first_name: '',
                last_name: '',
                disable: false
            }
        }

        //getOrganizations();
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
            this.usersModel.create(component.newUser,undefined)
                .then((result) => {
                    component.ngZone.run(() => {
                        component.crudHelperService.stopLoader(component);
                    });
                    component.crudHelperService.showNotification("User: Created",result.username);
                    component.returnToUsers();
                }, (error) => {
                    component.ngZone.run(() => {
                        component.crudHelperService.stopLoader(component);
                    });
                    component.crudHelperService.showServerError("User: Create failed",error);
                });
        }
    }

}