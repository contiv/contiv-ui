/**
 * Created by vjain3 on 11/1/16.
 */
import { RouterModule } from '@angular/router';
import { MenuComponent } from "./menu/menuCtrl";
import {NetworkPoliciesTabsComponent} from "./network_policies/networkpoliciestabsctrl";
import {IsolationPolicyCreateComponent} from "./network_policies/isolationpolicycreatectrl";
import {IsolationPolicyDetailsComponent} from "./network_policies/isolationpolicydetailsctrl";
import {BandwidthPolicyCreateComponent} from "./network_policies/bandwidthpolicycreatectrl";
import {BandwidthPolicyDetailsComponent} from "./network_policies/bandwidthpolicydetailsctrl";

const routes = [
    /*
     {
     path: '',
     loadChildren: 'menu/menu.module'
     },
     {
     path: 'm',
     loadChildren: 'menu/menu.module'
     }
     */
    {path: '', redirectTo: 'm', pathMatch: 'full'},
    {
        path: 'm',
        component: MenuComponent,
        children: [
            {path: '', redirectTo: 'networkpolicies/list', pathMatch: 'full'},
            //{path: '', redirectTo: 'dashboard', pathMatch:'full'},
            //{path: 'dashboard', component: DashboardComponent},
            {path: 'networkpolicies/list', component: NetworkPoliciesTabsComponent},
            {path: 'networkpolicies/isolation/create', component: IsolationPolicyCreateComponent},
            {path: 'networkpolicies/isolation/details/:key', component: IsolationPolicyDetailsComponent},
            {path: 'networkpolicies/isolation/edit/:key', component: IsolationPolicyDetailsComponent},
            {path: 'networkpolicies/bandwidth/create', component: BandwidthPolicyCreateComponent},
            {path: 'networkpolicies/bandwidth/details/:key', component: BandwidthPolicyDetailsComponent},
            {path: 'networkpolicies/bandwidth/edit/:key', component: BandwidthPolicyDetailsComponent}
        ]
    }
];

export default RouterModule.forRoot(routes);