import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { PremiumCalculatorService } from '../services/premium-calculator.service';
import { IPremium, IOccupation, IMember } from '../model/premium';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html'
})
export class CalculatorComponent implements OnInit  {
  @ViewChild(NgForm) premiumForm: NgForm;

  premium: IPremium = {
    name: '',
    age: 0,
    dateOfBirth: new Date(),
    deathSumInsured: 0,
    occupationId: 0,
    premium: 0,
  };
  errorReceived: boolean;
  occupationList: IOccupation[];
  membermodel: IMember = {
    name: '',
    age: undefined,
    dateOfBirth: new Date(),
    deathSumInsured: undefined,
    occupationList: [],
    occupationId: undefined,
    premium: undefined,
  };

  constructor(private service: PremiumCalculatorService) {

  }
  ngOnInit() {
    this.getOccupationList();
  }

  getOccupationList() {
    this.errorReceived = false;
    this.service.getOccupationList()
        .pipe(catchError((err) => this.handleError(err)))
        .subscribe(occlist => {
            this.membermodel.occupationList = occlist;
            console.log('occupation types received: ' + occlist.length);
    });
  }

  calculatePremium() {
    this.errorReceived = false;
    this.service.calculatePremium(this.premium)
        .pipe(catchError((err) => this.handleError(err)))
        .subscribe(premium => {
            this.premium = premium;
            this.membermodel.premium = premium.premium;
    });
  }

  submit(value){
    this.membermodel.occupationId = value;
    if (!this.premiumForm.valid) {
    return;
   }
    Object.keys(this.premium).forEach(key =>
      this.premium[key] = this.membermodel[key]
    );
    this.calculatePremium();
  }
    private handleError(error: any) {
      this.errorReceived = true;
      return Observable.throw(error);
  }
}

