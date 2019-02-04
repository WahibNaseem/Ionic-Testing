import { NavController, NavParams } from 'ionic-angular';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'page-buyout',
  templateUrl:'buyout.html'
})
export class BuyoutPage implements OnInit {
  productData: { name: string,  quantity: number };

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams) {}

  ngOnInit() {
    this.productData =this.navParams.data;
  }

  onConfirmPurchase() {
    this.navCtrl.popToRoot();
  }
}
