import { KeyValuePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Input, Output, EventEmitter } from '@angular/core';
import { AddToListCommand } from '../commands/add-to-list-command';
import { RemoveFromListCommand } from '../commands/remove-from-list-command';

@Component({
  selector: 'list-tab',
  standalone: true,
  imports: [KeyValuePipe, CommonModule, FormsModule],
  templateUrl: './list-tab.component.html',
  styleUrl: './list-tab.component.css'
})
export class ListTabComponent {
  @Input() isDisabled = false;
  @Output() listChangedEvent = new EventEmitter<string[]>();

  newElementText = '';
  elements: string[] = [];
  
  addToListCommand = new AddToListCommand(() => this.newElementText = '', this.elements, this.listChangedEvent);
  removefromListCommand = new RemoveFromListCommand(this.elements, this.listChangedEvent);
  
}
