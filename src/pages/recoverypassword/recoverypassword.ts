import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecoverypasswordOtpPage } from '../recoverypassword-otp/recoverypassword-otp';
import { HomePage } from '../home/home';

/*
  Modified By: Mohd Sanaullah Ghayasi.
  Dated On: 19-02-2018
*/

@Component({
  selector: 'page-recoverypassword',
  templateUrl: 'recoverypassword.html',
})
export class RecoverypasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecoverypasswordPage');
  }

  // This method is for submit to get OTP view
  submitEmail(){
    this.navCtrl.push(RecoverypasswordOtpPage);
  }

  // This method is for getting back to home page
  returnToHome(){
    this.navCtrl.setRoot(HomePage);
  }

}
