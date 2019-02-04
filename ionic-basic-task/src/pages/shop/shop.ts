import { BuyoutPage } from './buyout/buyout';
import { NavController, NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class ShopPage implements OnInit {
  name:string;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams) {}

  ngOnInit(){
    this.name = this.navParams.get('userName');
  }

  onGoToBuy(prodData: {name: string , quantity: number}) {
    this.navCtrl.push(BuyoutPage, prodData);
   }

}
