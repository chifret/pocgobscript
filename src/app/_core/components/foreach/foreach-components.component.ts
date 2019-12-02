import {AfterViewInit, Component, Injector, ViewChild, ViewContainerRef} from "@angular/core";
import {DragndropUtils} from "../../utils/dragndrop.utils";
import {HierarchicallevelComponentsComponent} from "../hierarchivallevel/hierarchicallevel-components.component";
import {ComponentUtils} from "../../utils/components.utils";
import {IfComponentsComponent} from "../if/if-components.component";
import construct = Reflect.construct;
import {EquipComponentsComponent} from "../equip/equip-components.component";

@Component({
    selector: "foreach-components-component",
    templateUrl: "foreach-components.component.html"
})

export class ForeachComponentsComponent implements AfterViewInit {
    @ViewChild("mainContainerAnchor", {static: false, read: ViewContainerRef}) mainContainerAnchor: ViewContainerRef;
    @ViewChild("firstElement", {static: false, read: ViewContainerRef}) firstElementRef: ViewContainerRef;
    @ViewChild("firstElement", {static: false}) firstElement: HierarchicallevelComponentsComponent;
    @ViewChild("lastElement", {static: false, read: ViewContainerRef}) lastElementRef: ViewContainerRef;
    @ViewChild("lastElement", {static: false}) lastElement: HierarchicallevelComponentsComponent;

    constructor(protected injector: Injector) {
    }

    ngAfterViewInit(): void {
        // drag drop events
        this.firstElementRef.element.nativeElement.addEventListener("dragover", (e: DragEvent) => {
            e.preventDefault();
        });
        this.firstElementRef.element.nativeElement.addEventListener("drop", (e: DragEvent) => {
            e.preventDefault();
            this.attachComponent(this.firstElementRef, ((DragndropUtils.getMessage(e) as any) as string));
            this.firstElement.display = false;
            this.lastElement.display = true;
        });

        this.lastElementRef.element.nativeElement.addEventListener("dragover", (e: DragEvent) => {
            e.preventDefault();
        });
        this.lastElementRef.element.nativeElement.addEventListener("drop", (e: DragEvent) => {
            e.preventDefault();
            this.attachComponent(this.firstElementRef, ((DragndropUtils.getMessage(e) as any) as string));
        });
    }

    attachComponent(element: ViewContainerRef, component: String) {
        switch (component) {
            case "foreach":
                ComponentUtils.addComponent(ForeachComponentsComponent, element, this.injector);
                break;
            case "if":
                ComponentUtils.addComponent(IfComponentsComponent, element, this.injector);
                break;
            case "equip":
                ComponentUtils.addComponent(EquipComponentsComponent, element, this.injector);
                break;
        }
    }
}
