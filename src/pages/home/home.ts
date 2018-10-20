import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { RecoverypasswordPage } from '../recoverypassword/recoverypassword';
import { RegistrationPage } from '../registration/registration';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  credentialsForm: FormGroup;
  visible:boolean=false;
  constructor(public navCtrl: NavController,private formBuilder: FormBuilder) {
    this.credentialsForm = this.formBuilder.group({
      email: ["", Validators.compose([Validators.required])],
      password: ["", Validators.compose([Validators.required])],
    });
  }

  // This method is for loading recovery page 
  loadRecoveryPassword(){
    this.navCtrl.push(RecoverypasswordPage);
  }

  // This method is for loading register page
  loadRegister(){
    this.navCtrl.push(RegistrationPage);
  }
  showHide(){
    console.log('in showhide');
    this.visible=!this.visible;
  }

}
