import {Component, Injector, Input, ViewContainerRef} from "@angular/core";
import {ComponentUtils} from "../../utils/components.utils";
import {ForeachComponentsComponent} from "../foreach/foreach-components.component";
import {IfComponentsComponent} from "../if/if-components.component";

@Component({
    selector: "hierarchicallevel-components-component",
    templateUrl: "hierarchicallevel-components.component.html"
})

export class HierarchicallevelComponentsComponent {
    @Input() text: String;
    @Input() display = true;

    constructor(protected injector: Injector) {
    }

    // attachComponent(element: ViewContainerRef, component: String) {
    //     switch (component) {
    //         case "foreach":
    //             ComponentUtils.addComponent(ForeachComponentsComponent, element, this.injector);
    //             break;
    //         case "if":
    //             ComponentUtils.addComponent(IfComponentsComponent, element, this.injector);
    //             break;
    //     }
    // }
    //
    // hide() {
    //     this.display = false;
    // }
    //
    // show() {
    //     this.display = true;
    // }
}
