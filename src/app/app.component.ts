import {AfterViewInit, Component, ViewChild, ViewContainerRef} from "@angular/core";
import {DragndropUtils} from "./_core/utils/dragndrop.utils";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit {
    @ViewChild("mainContainer", {static: false, read: ViewContainerRef}) mainContainer: ViewContainerRef;
    @ViewChild("foreachBlock", {static: false, read: ViewContainerRef}) foreachBlock: ViewContainerRef;
    @ViewChild("ifBlock", {static: false, read: ViewContainerRef}) ifBlock: ViewContainerRef;
    @ViewChild("equipBlock", {static: false, read: ViewContainerRef}) equipBlock: ViewContainerRef;

    ngAfterViewInit(): void {
        this.foreachBlock.element.nativeElement.addEventListener("dragstart", (e: DragEvent) => {
            DragndropUtils.setMessage(e, "foreach");
        });
        this.ifBlock.element.nativeElement.addEventListener("dragstart", (e: DragEvent) => {
            DragndropUtils.setMessage(e, "if");
        });
        this.equipBlock.element.nativeElement.addEventListener("dragstart", (e: DragEvent) => {
            DragndropUtils.setMessage(e, "equip");
        });
    }
}
