import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutvehicleComponent } from './outvehicle.component';

describe('OutvehicleComponent', () => {
  let component: OutvehicleComponent;
  let fixture: ComponentFixture<OutvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
