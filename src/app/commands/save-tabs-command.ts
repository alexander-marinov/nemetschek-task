import { Command } from "./command";
import { FrameState, TabOneData } from "../model/frame-state";
import { forkJoin } from "rxjs";

export class SaveTabsCommand implements Command<void> {
    
    private isSaveInProgress = false;
    private currentState: FrameState = { tab1: { field1: '', field2: "value1"}, tab2: { field3: [] }};
    private savedState: FrameState = { tab1: { field1: '', field2: "value1"}, tab2: { field3: [] }};
    
    get saveInProgress() {
        return this.isSaveInProgress;
    }

    execute() {
        this.isSaveInProgress = true;
        const observable = forkJoin([this.saveFirstTab(), this.saveSecondTab()]);
        observable.subscribe({
           next: value => console.log(value),
           complete: () => this.isSaveInProgress = false,
        });
    }
  
    canExecute() {
        return !this.isSaveInProgress &&
        !( this.currentState.tab1.field1 === this.savedState.tab1.field1 &&
           this.currentState.tab1.field2 === this.savedState.tab1.field2 &&
           this.currentState.tab2.field3.toString() === this.savedState.tab2.field3.toString() );
    }

    saveFirstTab() {
        localStorage.setItem("Tab1", JSON.stringify(this.currentState.tab1));
        this.savedState.tab1 = { ...this.currentState.tab1 };
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve('First tab is saved');
          }, 2000);
        });
    };
    
    saveSecondTab() {
        localStorage.setItem("Tab2", JSON.stringify(this.currentState.tab2));
        this.savedState.tab2.field3 = Array.from(this.currentState.tab2.field3);
        return new Promise((resolve) => {
           setTimeout(() => {
              resolve('Second tab is saved');
           }, 3000); 
        });
    };
    
    handleFirstTabChanges(event: TabOneData) {
        this.currentState.tab1 = event;
    }
    
    handleSecondTabChanges(event: string[]) {
        this.currentState.tab2.field3 = event;
    }
  }