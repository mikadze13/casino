import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DepositMoneyComponent } from './components/deposit-money/deposit-money.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { GamblingGameComponent } from './components/gambling-game/gambling-game.component';

const routes: Routes = [
  {
    path:'enter',
    component:GamblingGameComponent
  } ,
  {
    path:'', redirectTo:'deposit', pathMatch:'full'
  }, 
  { 
    path: 'deposit',
    component: DepositMoneyComponent 
  },  
  {
    path:'**',
    component:PagenotfoundComponent
  } 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
