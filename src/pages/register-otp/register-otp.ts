import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

/*
  Created By: Mohd Sanaullah Ghayasi.
  Dated On: 21-10-2018
*/

@Component({
  selector: 'page-register-otp',
  templateUrl: 'register-otp.html',
})
export class RegisterOtpPage {

  otpcode1:any;
  otpcode2:any;
  otpcode3:any;
  otpcode4:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterOtpPage');
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
          buttons: [{
            text: 'Try Again',
            handler: () => {
              console.log('Buy clicked');
              this.retryOtp();
            }
          }],
          cssClass: 'custom-alertBox'
        });
        alert.present();

        // If otp is valid 
        //this.navCtrl.push(RecoverynewpasswordPage);

      }, 5000);
    }
  }

  retryOtp(){
    // Alert control for displaying error message if unable to process otp
    let alert = this.alertCtrl.create({
      title: 'We apologize',
      subTitle: 'We`re having trouble validating your code. Please try again later or contact our service.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Contact',
          handler: () => {
            console.log('Buy clicked');
            this.acceptConditions();
          }
        }
      ],
      cssClass: 'custom-alertBox'
    });
    alert.present();
  }
  acceptConditions() {
  }

}
