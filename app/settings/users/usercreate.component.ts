import { Component, Inject, OnInit, NgZone } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CRUDHelperService } from "../../components/utils/crudhelperservice";
import { UsersModel } from "../../components/models/usersmodel";
import { OrganizationsModel } from "../../components/models/organizationsmodel";

@Component({
    selector: 'usercreate',
    templateUrl: 'settings/users/usercreate.html'
})

export class UserCreateComponent{
    newUser: any = {};
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
                userName: '',
                firstName: '',
                lastName: '',
                role: 'DevOps',
                enabled: true,
                tenantName: 'default'//TODO: Remove hardcoded tenant.
            };
        }

        getOrganizations();
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
            component.newUser.key = this.usersModel.generateKey(this.newUser);
            this.usersModel.create(component.newUser,undefined)
                .then((result) => {
                    component.ngZone.run(() => {
                        component.crudHelperService.stopLoader(component);
                        component.crudHelperService.showNotification("User: Created", result.key.toString());
                    });
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
