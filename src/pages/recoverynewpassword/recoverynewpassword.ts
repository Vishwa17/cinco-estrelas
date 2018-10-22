import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';


/*
  Created By: Mohd Sanaullah Ghayasi.
  Dated On: 20-02-2018
*/

@Component({
  selector: 'page-recoverynewpassword',
  templateUrl: 'recoverynewpassword.html',
})
export class RecoverynewpasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecoverynewpasswordPage');
  }

  // This method is for validating password and navigate to login page
  updatePassword(){
    // Alert control for displaying error message if otp is invalid
    let alert = this.alertCtrl.create({
      title: 'Password Changed',
      subTitle: '<p>Your password has been successfully changed.</p><p> Keep it safe.</p>',
      buttons: ['Try again'],
      cssClass: 'custom-alertBox'
    });
    alert.present();

    this.navCtrl.setRoot(HomePage);
  }

}
