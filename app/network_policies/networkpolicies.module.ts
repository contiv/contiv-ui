/**
 * Created by vjain3 on 10/14/16.
 */
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DirectivesModule } from "../components/directives/directives.module";
import { NetworkPoliciesTabsComponent } from "./networkpoliciestabsctrl";
import { IsolationPolicyCreateComponent } from "./isolationpolicycreatectrl";
import { IsolationPolicyDetailsComponent } from "./isolationpolicydetailsctrl";
import { BandwidthPolicyCreateComponent } from "./bandwidthpolicycreatectrl";
import { BandwidthPolicyDetailsComponent } from "./bandwidthpolicydetailsctrl";
import { IsolationListComponent } from "./isolationpolicylistctrl";
import { BandwidthListComponent } from "./bandwidthpolicylistctrl";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule,
        DirectivesModule
    ],
    declarations: [
        NetworkPoliciesTabsComponent,
        IsolationPolicyCreateComponent,
        IsolationPolicyDetailsComponent,
        BandwidthPolicyCreateComponent,
        BandwidthPolicyDetailsComponent,
        BandwidthPolicyCreateComponent,
        IsolationListComponent,
        BandwidthListComponent
    ],
    exports: [
        NetworkPoliciesTabsComponent,
        IsolationPolicyCreateComponent,
        IsolationPolicyDetailsComponent,
        BandwidthPolicyCreateComponent,
        BandwidthPolicyDetailsComponent,
        IsolationListComponent,
        BandwidthListComponent,
        FormsModule,
        CommonModule,
        RouterModule,
        DirectivesModule
    ]
})
export class NetworkPoliciesModule {}
