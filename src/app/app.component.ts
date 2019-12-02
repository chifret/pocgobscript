import {AfterViewInit, Component, Injector, ViewChild, ViewContainerRef} from "@angular/core";
import {ComponentUtils} from "./_core/utils/components.utils";
import {ForeachComponentsComponent} from "./_core/components/foreach/foreach-components.component";
import {IfComponentsComponent} from "./_core/components/if/if-components.component";
import {HierarchicallevelComponentsComponent} from "./_core/components/hierarchivallevel/hierarchicallevel-components.component";
import {DragndropUtils} from "./_core/utils/dragndrop.utils";
import {EquipComponentsComponent} from "./_core/components/equip/equip-components.component";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
    title = "trollkipu";
    @ViewChild("mainContainer", {static: false, read: ViewContainerRef}) mainContainer: ViewContainerRef;
    @ViewChild("mainContainerAnchor", {static: false, read: ViewContainerRef}) mainContainerAnchor: ViewContainerRef;
    @ViewChild("firstElement", {static: false, read: ViewContainerRef}) firstElementRef: ViewContainerRef;
    @ViewChild("firstElement", {static: false}) firstElement: HierarchicallevelComponentsComponent;
    @ViewChild("lastElement", {static: false, read: ViewContainerRef}) lastElementRef: ViewContainerRef;
    @ViewChild("lastElement", {static: false}) lastElement: HierarchicallevelComponentsComponent;

    @ViewChild("foreachBlock", {static: false, read: ViewContainerRef}) foreachBlock: ViewContainerRef;
    @ViewChild("ifBlock", {static: false, read: ViewContainerRef}) ifBlock: ViewContainerRef;
    @ViewChild("equipBlock", {static: false, read: ViewContainerRef}) equipBlock: ViewContainerRef;


    constructor(protected injector: Injector) {
    }

    ngAfterViewInit(): void {
        // setTimeout(() => {
        //     console.log("test");
        //     ComponentUtils.addComponent(ForeachComponentsComponent, this.mainContainerAnchor, this.injector);
        //     this.firstElement.element.nativeElement.display = false;
        //     this.lastElement.element.nativeElement.display = true;
        // }, 1500);

        // set data on drag
        this.foreachBlock.element.nativeElement.addEventListener("dragstart", (e: DragEvent) => {
            DragndropUtils.setMessage(e, "foreach");
        });
        this.ifBlock.element.nativeElement.addEventListener("dragstart", (e: DragEvent) => {
            DragndropUtils.setMessage(e, "if");
        });
        this.equipBlock.element.nativeElement.addEventListener("dragstart", (e: DragEvent) => {
            DragndropUtils.setMessage(e, "equip");
        });

        // drag drop events
        this.firstElementRef.element.nativeElement.addEventListener("dragover", (e: DragEvent) => {
            e.preventDefault();
        });
        this.firstElementRef.element.nativeElement.addEventListener("drop", (e: DragEvent) => {
            e.preventDefault();
            //TODO mainContainerAnchor ?
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
