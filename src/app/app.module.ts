import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {ForeachComponentsComponent} from "./_core/components/foreach/foreach-components.component";
import {IfComponentsComponent} from "./_core/components/if/if-components.component";
import {HierarchicallevelComponentsComponent} from "./_core/components/hierarchivallevel/hierarchicallevel-components.component";
import {EquipComponentsComponent} from "./_core/components/equip/equip-components.component";

@NgModule({
    declarations: [
        AppComponent,
        ForeachComponentsComponent,
        IfComponentsComponent,
        HierarchicallevelComponentsComponent,

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
