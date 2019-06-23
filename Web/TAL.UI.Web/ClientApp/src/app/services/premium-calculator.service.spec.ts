import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { PremiumCalculatorService } from './premium-calculator.service';
import { DataService } from './data.service';
import { InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpHandler } from "@angular/common/http";
export const BASE_URL = new InjectionToken<string>('BASE_URL');

export function getBaseUrl() {
  return 'http://localhost';
}


describe('PremiumCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
    ],
      providers: [PremiumCalculatorService,  DataService, HttpClient,
        { provide: 'BASE_URL', useFactory: getBaseUrl, deps: []  }, HttpClient, HttpHandler
      ]
    });
  });

  it('premium service should be created', inject([PremiumCalculatorService], (service: PremiumCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
