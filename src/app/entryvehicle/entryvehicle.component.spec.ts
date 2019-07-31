import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryvehicleComponent } from './entryvehicle.component';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

describe('EntryvehicleComponent', () => {
  let component: EntryvehicleComponent;
  let fixture: ComponentFixture<EntryvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterModule,HttpClientTestingModule,FormsModule ],
      declarations:[EntryvehicleComponent]
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
