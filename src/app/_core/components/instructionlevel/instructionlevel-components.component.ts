import {Component, Input} from "@angular/core";

@Component({
    selector: "instructionlevel-components-component",
    templateUrl: "instructionlevel-components.component.html"
})

export class InstructionlevelComponentsComponent {
    @Input() text: String;
    @Input() display = true;
}
