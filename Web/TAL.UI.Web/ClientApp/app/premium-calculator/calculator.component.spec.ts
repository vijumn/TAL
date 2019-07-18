import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule, FormControl, FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { CalculatorComponent } from './calculator.component';
import { CUSTOM_ELEMENTS_SCHEMA, InjectionToken } from '@angular/core';
import { PremiumCalculatorService } from '../services/premium-calculator.service';
import { IPremium, IOccupation, IMember } from '../model/premium';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { DataService } from '../services/data.service';

export const BASE_URL = new InjectionToken<string>('BASE_URL');
export function getBaseUrl() {
  return 'http://localhost';
}

describe('CounterComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ],
      imports: [FormsModule, HttpClientTestingModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [  {  provide: 'BASE_URL', useFactory: getBaseUrl, deps: []  },
        PremiumCalculatorService,  DataService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display a title', async(() => {
    const titleText = fixture.nativeElement.querySelector('h2').textContent;
    expect(titleText).toEqual('Premium Calculator');
  }));

});
