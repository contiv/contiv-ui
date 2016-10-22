/**
 * Created by cshampur on 10/18/16.
 */
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DirectivesModule } from "../components/directives/directives.module";
import {NetworkListComponent} from "./networklistctrl";
import {NetworkStatComponent} from "./networkstatsctrl";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        DirectivesModule
    ],
    declarations: [
        NetworkListComponent,
        NetworkStatComponent
    ],
    exports: [
        NetworkListComponent,
        NetworkStatComponent
    ]
})
export class NetworkModule {}
