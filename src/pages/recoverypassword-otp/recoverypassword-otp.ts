import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { RecoverynewpasswordPage } from '../recoverynewpassword/recoverynewpassword';


/*
  Created By: Mohd Sanaullah Ghayasi.
  Dated On: 19-02-2018
*/

@Component({
  selector: 'page-recoverypassword-otp',
  templateUrl: 'recoverypassword-otp.html',
})
export class RecoverypasswordOtpPage {

  otpcode1:any;
  otpcode2:any;
  otpcode3:any;
  otpcode4:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecoverypasswordOtpPage');
  }
  
  next(el) {
    el.setFocus();
  }

  verifyOtp(){
    let otpCodeStatus = (this.otpcode1 != '' && this.otpcode2 != '') && (this.otpcode3 != '' && this.otpcode4 != '');
    if(otpCodeStatus == true){
      let loading = this.loadingCtrl.create({
        spinner: 'bubbles',
        cssClass: 'custom-loader'
      });
    
      loading.present();

      setTimeout(() => {
        loading.dismiss();

        // Alert control for displaying error message if otp is invalid
        let alert = this.alertCtrl.create({
          title: 'Incorrect code',
          subTitle: 'Please verify and enter the code you have received by email.',
          buttons: ['Try again'],
          cssClass: 'custom-alertBox'
        });
        alert.present();

        // If otp is valid 
        this.navCtrl.push(RecoverynewpasswordPage);

      }, 5000);
    }
  }
}
