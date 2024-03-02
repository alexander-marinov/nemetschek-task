import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownTabComponent } from './dropdown-tab.component';

describe('DropdownTabComponent', () => {
  let component: DropdownTabComponent;
  let fixture: ComponentFixture<DropdownTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
