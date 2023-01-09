import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatSelectModule} from '@angular/material/select';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DepositMoneyComponent } from './components/deposit-money/deposit-money.component';
import { Routes,RouterModule, ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { GamblingGameComponent } from './components/gambling-game/gambling-game.component'; 

@NgModule({
  declarations: [
    AppComponent,
    DepositMoneyComponent,
    PagenotfoundComponent,
    GamblingGameComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatNativeDateModule ,
    MatFormFieldModule,
    MatSlideToggleModule,
    RouterModule.forRoot([
      // {path:'',redirectTo:'enter',pathMatch:'full'},
      // { path: '', component:AppComponent},
       
    ]),
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
