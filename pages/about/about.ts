import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['about.css'],
})
export class AboutPage {
  BalanceTransferAmount:number;
  PaymentTerms:number;
  TotalInterestPayable: number;
  TotalAmountPayable: number;
  MonthlyPayment: number;


  constructor(public navCtrl: NavController) {

  }

  compute() {
    this.TotalInterestPayable = ((this.BalanceTransferAmount*1.50/100)*this.PaymentTerms);

    this.TotalAmountPayable = (+this.TotalInterestPayable+ +this.BalanceTransferAmount);

    this.MonthlyPayment = (this.TotalAmountPayable/this.PaymentTerms);
  }

}
