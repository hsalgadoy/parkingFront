import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import{HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ListparkingComponent } from './listparking.component';
import { HttpClientModule} from '@angular/common/http';
describe('ListparkingComponent', () => {
  let component: ListparkingComponent;
  let fixture: ComponentFixture<ListparkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      
      declarations: [ ListparkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListparkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
