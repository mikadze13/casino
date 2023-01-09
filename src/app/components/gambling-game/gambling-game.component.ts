import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-gambling-game',
  templateUrl: './gambling-game.component.html',
  styleUrls: ['./gambling-game.component.css'],
})
export class GamblingGameComponent implements OnInit {
  public imageList: Array<any> = [
    { id: 1, Url: './../assets/images/blackcard.png' },
    { id: 2, Url: './../assets/images/redcard.png' },
  ];
  providerUserInfo: any[] = [];
  selectedColor: string = 'select Color';
  selectbet!: string;
  random!: number;
  loseProbability: boolean = false;
  winProbability: boolean = false;
  imageUrlBlack!: string;
  imageUrlRed!: string;
  totalAmount!: number;
  Bet!: number;
  withdrawQuantity!: number;
  name!: string;
  but: boolean = false;
  bool: boolean = false;
  bool1: boolean = false;
  show: boolean = false;
  count: number = 0;
  successfulMessage: boolean = false;
  num!:number
  cardImg:boolean=true
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.providerUserInfo.push(params.get('name'));
      this.providerUserInfo.push(params.get('age'));
      this.providerUserInfo.push(params.get('quantity'));
      console.log(this.providerUserInfo, 'info');

      this.totalAmount = Number(this.providerUserInfo[2]);
      this.name = this.providerUserInfo[0];
    });
  }
  guess() {
    // console.log(this.selectedColor);
    this.cardImg=false
    this.random = Math.floor(Math.random() * this.imageList.length);
    if (this.random == 0) {
      this.imageUrlBlack = this.imageList[0].Url;
      this.bool = true;
      this.bool1 = false;
    } else {
      this.imageUrlRed = this.imageList[1].Url;
      this.bool1 = true;
      this.bool = false;
    }

    // win or lose game
    if (
      (this.random == 0 && this.selectedColor == 'black') ||
      (this.random == 1 && this.selectedColor == 'red')
    ) {
      this.totalAmount = this.totalAmount + this.Bet;
      this.num=this.totalAmount
      this.winProbability = true;
      this.loseProbability = false;
      this.count++;
      // win audio effect
      let audio = new Audio();
      audio.src = '../../../assets/audio/win.mp3';
      audio.load();
      audio.play();
      console.log('you are lucky congratulation');
    } else {
      console.log('try again');
      this.loseProbability = true;
      this.winProbability = false;
      this.totalAmount = this.totalAmount - this.Bet;
      this.num=this.totalAmount
      this.count = 0;

      // lose audio effect
      let audio = new Audio();
      audio.src = '../../../assets/audio/lose.mp3';
      audio.load();
      audio.play();
    }

    // this.router.navigate(['/enter'], {
    //   queryParams: {
    //     name: this.name,
    //     age: this.providerUserInfo[1],
    //     quantity: this.num,
    //   }
    // });
   
    // mega win audio
    if (this.count == 3) {
      let audio = new Audio();
      audio.src = '../../../assets/audio/megawin.mp3';
      audio.load();
      audio.play();
    }
  }

  // withdraw money from accaunt
  withdrawMoney() {
    if (this.withdrawQuantity <= this.totalAmount) {
      this.totalAmount = this.totalAmount - this.withdrawQuantity;
      this.withdrawDemoMoney.reset();
      this.successfulMessage = true;
      setTimeout(() => {
        this.successfulMessage = false;
      }, 2000);
    } else {
      const button = document.getElementById(
        'btn1'
      ) as HTMLButtonElement | null;
      button?.setAttribute('disabled', '');
      alert('arasakmarisi tanxa angarishze');
    }
  }

  //withdraw cancel
  cancel() {
    this.show = false;
  }
  Show() {
    this.show = true;
  }
  // multiplyBet
  multiplyBet() {
    if(!this.Bet){
      alert('Specify the amount to be doubled')
    }
    this.Bet = this.Bet * 2;
  }

  // Validation on Bet form
  betForm = new FormGroup({
    bet: new FormControl('', [Validators.required]),
  });

  get bet() {
    return this.betForm.get('bet');
  }
  // Validation on demo withdrawal
  withdrawDemoMoney = new FormGroup({
    withdrawInp: new FormControl('', [Validators.required]),
  });
  get withdrawInp() {
    return this.withdrawDemoMoney.get('withdrawInp');
  }
}
