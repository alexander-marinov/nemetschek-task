import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dropdown-tab',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './dropdown-tab.component.html',
  styleUrl: './dropdown-tab.component.css'
})
export class DropdownTabComponent implements OnInit, OnChanges {
  @Input() isDisabled = false;
  @Output() formChangedEvent = new EventEmitter<any>(); //todo fix the type here

  dropdownForm = this.formBuilder.group({
    field1: '',
    field2: 'value1'
  });

  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.dropdownForm.valueChanges.subscribe(value => {
      this.formChangedEvent.emit(value);
    });
    this.setDisabledState();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setDisabledState();
    console.log('changes', changes);
  }

  setDisabledState(): void {
    if (this.isDisabled) {
      this.dropdownForm.disable();
    } else {
      this.dropdownForm.enable();
    }
  }
}
