/**
 * Created by cshampur on 10/29/16.
 */

/**
 * Created by cshampur on 10/18/16.
 */
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DirectivesModule } from "../components/directives/directives.module";
import {WizardComponent} from "./wizardctrl";
import {WizardService} from "./wizardservice";
import {Wizardpage1Component} from "./wizardpage1ctrl";
import {Wizardpage2Component} from "./wizardpage2ctrl";
import {Wizardpage3Component} from "./wizardpage3ctrl";
import {RouterModule} from "@angular/router";


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        DirectivesModule,
        RouterModule
    ],
    declarations: [
        WizardComponent,
        Wizardpage1Component,
        Wizardpage2Component,
        Wizardpage3Component
    ],
    exports: [
        WizardComponent,
        Wizardpage1Component,
        Wizardpage2Component,
        Wizardpage3Component
    ],
    providers: [WizardService]
})
export class WizardModule {}
