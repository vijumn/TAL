import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './premium-calculator/calculator.component';
import { PremiumCalculatorService } from './services/premium-calculator.service';
import { DataService } from './services/data.service';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: CalculatorComponent, pathMatch: 'full'  },
      { path: 'home', component: HomeComponent },
    ])
  ],
  providers: [PremiumCalculatorService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
