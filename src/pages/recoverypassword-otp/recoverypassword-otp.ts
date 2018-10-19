import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Modified By: Mohd Sanaullah Ghayasi.
  Dated On: 19-02-2018
*/

@Component({
  selector: 'page-recoverypassword-otp',
  templateUrl: 'recoverypassword-otp.html',
})
export class RecoverypasswordOtpPage {

  text1:any;
  text2:any;
  text3:any;
  text4:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecoverypasswordOtpPage');
  }
  
  next(el) {
    el.setFocus();
  }

  verifyOtp(){
    console.log(this.text4);
  }
}
