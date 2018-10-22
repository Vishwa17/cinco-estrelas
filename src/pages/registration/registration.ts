import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { RegisterOtpPage } from '../../pages/register-otp/register-otp';

/*
  Created By: Mohd Sanaullah Ghayasi.
  Dated On: 21-10-2018
*/

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  userRegister(){
    // Alert control for displaying error message if otp is invalid
    let alert = this.alertCtrl.create({
      title: 'Terms and conditions',
      subTitle: '<p>I have read and accept the</p><u>Terms and Conditions.</u>',
      buttons: [
        {
          text: 'I do not accept',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'I accept',
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

  acceptConditions(){
    this.navCtrl.push(RegisterOtpPage);
  }

}
