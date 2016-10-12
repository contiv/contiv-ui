/**
 * Created by vjain3 on 10/6/16.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { NetprofilesModel } from "./components/models/netprofilesmodel";
import { ApplicationGroupsModel } from "./components/models/applicationgroupsmodel";
import { NetworksModel } from "./components/models/networksmodel";
import { NodesModel } from "./components/models/nodesmodel";
import { OrganizationsModel } from "./components/models/organizationsmodel";
import { PoliciesModel } from "./components/models/policiesmodel";
import { RulesModel } from "./components/models/rulesmodel";
import { ServicelbsModel } from "./components/models/servicelbsmodel";
import { StoragePoliciesModel } from "./components/models/storagepoliciesmodel";
import { VolumesModel } from "./components/models/volumesmodel";

@NgModule({
    imports: [
        BrowserModule, HttpModule
    ],
    providers: [
        ApplicationGroupsModel,
        NetprofilesModel,
        NetworksModel,
        NodesModel,
        OrganizationsModel,
        PoliciesModel,
        RulesModel,
        ServicelbsModel,
        StoragePoliciesModel,
        VolumesModel
    ]
})
export class AppModule {}
