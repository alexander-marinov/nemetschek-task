import { Component, HostListener } from '@angular/core';
import { DropdownTabComponent } from './dropdown-tab/dropdown-tab.component';
import { ListTabComponent } from './list-tab/list-tab.component';
import { CommonModule } from '@angular/common';
import { SaveTabsCommand } from './commands/save-tabs-command';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DropdownTabComponent, ListTabComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  saveTabsCommand = new SaveTabsCommand();

  activeTab = "tab1";

  activateTab(tabId: string) {
    this.activeTab = tabId;
  }

  tabStyle(tabId: string) {
    if (this.activeTab === tabId) {
      return 'tab-button-active';
    } else {
      return 'tab-button';
    }
  }
  
}
