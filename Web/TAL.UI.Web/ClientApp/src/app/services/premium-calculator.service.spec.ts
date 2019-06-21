import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { PremiumCalculatorService } from './premium-calculator.service';
import { DataService } from './data.service';
import { InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpHandler } from "@angular/common/http";
export const BASE_URL = new InjectionToken<string>('BASE_URL');

describe('PremiumCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PremiumCalculatorService,  DataService,   
        { provide: BASE_URL, useValue: 'http://localhost' },HttpClient,HttpHandler
      
      ]
    });
  });

  it('should be created', inject([PremiumCalculatorService], (service: PremiumCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
