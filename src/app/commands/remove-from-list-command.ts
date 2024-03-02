import { EventEmitter } from "@angular/core";
import { Command } from "./command";

export class RemoveFromListCommand implements Command<number> {

    constructor(
      private listElements: string[], 
      private listChangedEvent:EventEmitter<string[]>
    ) {}
  
    execute(index: number) {
      if (!this.canExecute()) {
        return;
      }
      this.listElements.splice(index, 1);
      this.listChangedEvent.emit(this.listElements);
    }
  
    canExecute() {
      return this.listElements.length > 0;
    }
  }