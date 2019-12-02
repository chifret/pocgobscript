import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {ForeachComponentsComponent} from "./_core/components/foreach/foreach-components.component";
import {IfComponentsComponent} from "./_core/components/if/if-components.component";
import {InstructionlevelComponentsComponent} from "./_core/components/instructionlevel/instructionlevel-components.component";
import {EquipComponentsComponent} from "./_core/components/equip/equip-components.component";
import {HierarchicallevelComponentsComponent} from "./_core/components/hierarchicallevel-components.component/hierarchicallevel-components.component";

@NgModule({
    declarations: [
        AppComponent,
        ForeachComponentsComponent,
        IfComponentsComponent,

        HierarchicallevelComponentsComponent,
        InstructionlevelComponentsComponent,

        EquipComponentsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    entryComponents: [
        ForeachComponentsComponent,
        IfComponentsComponent,

        EquipComponentsComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
