export class DragndropUtils {
    static format = "text";

    static setMessage(e: DragEvent, data: any): void {
        e.dataTransfer.setData(DragndropUtils.format, `subject:customDragDrop,data:application/json;${JSON.stringify(data)}`);
    }

    static getMessage(e: DragEvent): JSON {
        try {
            const message = e.dataTransfer.getData(DragndropUtils.format).substr(0, e.dataTransfer.getData(DragndropUtils.format).indexOf(";")).split(",");
            if (message[0].split(":")[1] === "customDragDrop") {
                return JSON.parse(e.dataTransfer.getData(DragndropUtils.format).substr(e.dataTransfer.getData(DragndropUtils.format).indexOf(";") + 1));
            }
            return null;
        } catch (e) {
            return null;
        }
    }

    static isMessage(e: DragEvent): boolean {
        try {
            if (e.dataTransfer.getData(DragndropUtils.format)
                .substr(0, e.dataTransfer.getData(DragndropUtils.format).indexOf(";"))
                .split(",")[0].split(":")[1] === "customDragDrop") {
                return true;
            }
        } catch (e) {
            return false;
        }
    }
}
