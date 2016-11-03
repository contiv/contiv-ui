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
import { DashboardComponent } from "./dashboard/dashboardctrl";
import { AppGrouplistComponent } from "./applicationgroups/applicationgrouplistctrl";
import { ApplicationGroupCreateComponent } from "./applicationgroups/applicationgroupcreatectrl";
import { ApplicationGroupDetailsComponent } from "./applicationgroups/applicationgroupdetailsctrl";
import { SettingsMenuComponent } from "./settings/settingsmenu.component";
import { ClusterSettingsComponent } from "./settings/clustersettingctrl";
import { NetworkSettingsComponent } from "./settings/networksettingctrl";
import { OrganizationListComponent } from "./organizations/organizationlistctrl";
import { OrganizationCreateComponent } from "./organizations/organizationcreatectrl";
import { OrganizationDetailsComponent } from "./organizations/organizationdetailsctrl";


const routes = [
    {path: '', redirectTo: 'm', pathMatch: 'full'},
    {
        path: 'm',
        component: MenuComponent,
        children: [
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            {path: 'dashboard', component: DashboardComponent},
            //Network Policies
            {path: 'networkpolicies/list', component: NetworkPoliciesTabsComponent},
            {path: 'networkpolicies/isolation/create', component: IsolationPolicyCreateComponent},
            {path: 'networkpolicies/isolation/details/:key', component: IsolationPolicyDetailsComponent},
            {path: 'networkpolicies/isolation/edit/:key', component: IsolationPolicyDetailsComponent},
            {path: 'networkpolicies/bandwidth/create', component: BandwidthPolicyCreateComponent},
            {path: 'networkpolicies/bandwidth/details/:key', component: BandwidthPolicyDetailsComponent},
            {path: 'networkpolicies/bandwidth/edit/:key', component: BandwidthPolicyDetailsComponent},
            //Application Groups
            {path: 'applicationgroups/list', component: AppGrouplistComponent},
            {path: 'applicationgroups/create', component: ApplicationGroupCreateComponent},
            {path: 'applicationgroups/details/:key', component: ApplicationGroupDetailsComponent},
            {path: 'applicationgroups/edit/:key', component: ApplicationGroupDetailsComponent},
            //Settings
            {
                path: 'settings',
                component: SettingsMenuComponent,
                children: [
                    {path: '', redirectTo: 'cluster', pathMatch: 'full'},
                    {path: 'cluster', component: ClusterSettingsComponent},
                    {path: 'networks', component: NetworkSettingsComponent}
                ]
            },
            //Organizations
            {path: 'organizations/list', component: OrganizationListComponent},
            {path: 'organizations/create', component: OrganizationCreateComponent},
            {path: 'organizations/details/:key', component: OrganizationDetailsComponent}
        ]
    }
];

export default RouterModule.forRoot(routes);