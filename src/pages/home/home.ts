import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RecoverypasswordPage } from '../recoverypassword/recoverypassword';
import { RegistrationPage } from '../registration/registration';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  // This method is for loading recovery page 
  loadRecoveryPassword(){
    this.navCtrl.push(RecoverypasswordPage);
  }

  // This method is for loading register page
  loadRegister(){
    this.navCtrl.push(RegistrationPage);
  }



}
