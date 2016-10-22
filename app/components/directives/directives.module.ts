/**
 * Created by vjain3 on 10/17/16.
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ErrorMessageComponent } from "./errormessagedirective";
import { CollapsibleComponent } from "./collapsibledirective";
import {CtvTableComponent, CtvThComponent, CtvSearchComponent, CtvTpaginationComponent} from "./tabledirective";
import {FormsModule} from "@angular/forms";
import {CtvAccordionComponent} from "./accordiondirective";

@NgModule({
    imports: [
        CommonModule, FormsModule
    ],
    declarations: [
        ErrorMessageComponent,
        CollapsibleComponent,
        CtvTableComponent,
        CtvThComponent,
        CtvSearchComponent,
        CtvTpaginationComponent,
        CtvAccordionComponent
    ],
    exports: [
        ErrorMessageComponent,
        CollapsibleComponent,
        CtvTableComponent,
        CtvThComponent,
        CtvSearchComponent,
        CtvTpaginationComponent,
        CtvAccordionComponent
    ]
})
export class DirectivesModule {}