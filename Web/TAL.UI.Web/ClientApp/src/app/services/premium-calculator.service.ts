import { Injectable, Inject } from '@angular/core';
import { Response } from '@angular/http';

import { DataService } from './data.service';
import { IOccupation, IPremium } from '../model/premium';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PremiumCalculatorService {
  private occupationUrl = '';
  private premiumUrl = '';
  
  constructor(private service: DataService, @Inject('BASE_URL') baseUrl: string) {
   this.occupationUrl = baseUrl + 'api/v1/occupation';
   this.premiumUrl = baseUrl + 'api/v1/premium';
  }

  getOccupationList(): Observable<IOccupation[]> {
        let url = this.occupationUrl + '/types';
        return this.service.get(url).pipe(map((response: Response) => {
            return response;
        }));
  }

calculatePremium(premium): Observable<IPremium> {
  let url = this.premiumUrl + '/Calculate';
  return this.service.post(url, premium).pipe(map((response: Response) => {
    return response;
  }));
}

}

