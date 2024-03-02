import { EventEmitter } from "@angular/core";
import { Command } from "./command";

export class AddToListCommand implements Command<string> {
  
    constructor(
      private clearEditField: () => void,
      private listElements: string[], 
      private listChangedEvent:EventEmitter<string[]>
    ) {}
  
    execute(params: string) {
      if (!this.canExecute() || params == undefined || params.trim() === '') {
        return;
      }
      this.listElements.push(params);
      this.clearEditField();
      this.listChangedEvent.emit(this.listElements);
    }
  
    canExecute() {
      return this.listElements.length < 10;
    }
}