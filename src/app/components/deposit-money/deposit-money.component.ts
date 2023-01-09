import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AgeValidator } from './age.validator';

@Component({
  selector: 'app-deposit-money',
  templateUrl: './deposit-money.component.html',
  styleUrls: ['./deposit-money.component.css']
})
export class DepositMoneyComponent {
  done:boolean=false
  done1:boolean=false
  arr:any[]=[]
  @Output()
  InfoOfUser:EventEmitter<any>=new EventEmitter()

  UserInfo= new FormGroup({
    name:new FormControl('',[Validators.required]),
    age:new FormControl('', [AgeValidator]), 
    quantity:new FormControl('',[Validators.required])
})

but(){
   this.arr.push(this.UserInfo.value)
  // this.InfoOfUser.emit(this.arr)
  // console.log(this.InfoOfUser)
  if(!this.UserInfo.valid){
     this.UserInfo.get('age')
    
  }  
}
  get name(){
    return this.UserInfo.get('name')
  }
  get age(){
    return this.UserInfo.get('age')
  }
  get quantity(){
    return this.UserInfo.get('quantity')
  }
}

