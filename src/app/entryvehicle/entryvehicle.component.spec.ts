import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryvehicleComponent } from './entryvehicle.component';

describe('EntryvehicleComponent', () => {
  let component: EntryvehicleComponent;
  let fixture: ComponentFixture<EntryvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
