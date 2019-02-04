import { NavController } from 'ionic-angular';
import { Component } from "@angular/core";
import { ShopPage } from '../shop/shop';


@Component({
  selector: 'page-users',
 templateUrl: 'users.html'
})
export class UsersPage {

  constructor(private navCtrl: NavController) {}

  onGoToShop(name: string) {
    this.navCtrl.push(ShopPage,{userName: name})
  }
}
