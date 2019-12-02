import {AfterViewInit, Component, Injector, ViewChild, ViewContainerRef} from "@angular/core";
import {HierarchicallevelComponentsComponent} from "../hierarchivallevel/hierarchicallevel-components.component";
import {DragndropUtils} from "../../utils/dragndrop.utils";
import {ComponentUtils} from "../../utils/components.utils";
import {ForeachComponentsComponent} from "../foreach/foreach-components.component";
import {EquipComponentsComponent} from "../equip/equip-components.component";

@Component({
    selector: "if-components-component",
    templateUrl: "if-components.component.html"
})

export class IfComponentsComponent implements AfterViewInit {
    @ViewChild("mainContainerIfAnchor", {static: false, read: ViewContainerRef}) mainContainerIfAnchor: ViewContainerRef;
    @ViewChild("firstElementIf", {static: false, read: ViewContainerRef}) firstElementIfRef: ViewContainerRef;
    @ViewChild("firstElementIf", {static: false}) firstElementIf: HierarchicallevelComponentsComponent;
    @ViewChild("lastElementIf", {static: false, read: ViewContainerRef}) lastElementIfRef: ViewContainerRef;
    @ViewChild("lastElementIf", {static: false}) lastElementIf: HierarchicallevelComponentsComponent;

    @ViewChild("mainContainerElseAnchor", {static: false, read: ViewContainerRef}) mainContainerElseAnchor: ViewContainerRef;
    @ViewChild("firstElementElse", {static: false, read: ViewContainerRef}) firstElementElseRef: ViewContainerRef;
    @ViewChild("firstElementElse", {static: false}) firstElementElse: HierarchicallevelComponentsComponent;
    @ViewChild("lastElementElse", {static: false, read: ViewContainerRef}) lastElementElseRef: ViewContainerRef;
    @ViewChild("lastElementElse", {static: false}) lastElementElse: HierarchicallevelComponentsComponent;

    constructor(protected injector: Injector) {
    }

    ngAfterViewInit(): void {
        // drag drop events
        // if
        this.firstElementIfRef.element.nativeElement.addEventListener("dragover", (e: DragEvent) => {
            e.preventDefault();
        });
        this.firstElementIfRef.element.nativeElement.addEventListener("drop", (e: DragEvent) => {
            e.preventDefault();
            this.attachComponent(this.firstElementIfRef, ((DragndropUtils.getMessage(e) as any) as string));
            this.firstElementIf.display = false;
            this.lastElementIf.display = true;
        });

        this.lastElementIfRef.element.nativeElement.addEventListener("dragover", (e: DragEvent) => {
            e.preventDefault();
        });
        this.lastElementIfRef.element.nativeElement.addEventListener("drop", (e: DragEvent) => {
            e.preventDefault();
            this.attachComponent(this.lastElementIfRef, ((DragndropUtils.getMessage(e) as any) as string));
        });

        // else
        this.firstElementElseRef.element.nativeElement.addEventListener("dragover", (e: DragEvent) => {
            e.preventDefault();
        });
        this.firstElementElseRef.element.nativeElement.addEventListener("drop", (e: DragEvent) => {
            e.preventDefault();
            this.attachComponent(this.firstElementElseRef, ((DragndropUtils.getMessage(e) as any) as string));
            this.firstElementElse.display = false;
            this.lastElementElse.display = true;
        });

        this.lastElementElseRef.element.nativeElement.addEventListener("dragover", (e: DragEvent) => {
            e.preventDefault();
        });
        this.lastElementElseRef.element.nativeElement.addEventListener("drop", (e: DragEvent) => {
            e.preventDefault();
            this.attachComponent(this.lastElementElseRef, ((DragndropUtils.getMessage(e) as any) as string));
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
