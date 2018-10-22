import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { HomePage } from '../../pages/home/home';
import { RegistrationPage } from '../../pages/registration/registration';


//import { TranslateModule } from '@ngx-translate/core';

/**
 * Generated class for the SlidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {
  //slides:[];
  dir: string = 'ltr';
  constructor(public navCtrl: NavController, public navParams: NavParams,public platform:Platform,
              public afauth:AngularFireAuth,
          public gplus: GooglePlus,private fb:Facebook) {
    this.dir = platform.dir();
  /*	this.slides = [
      {
        title: values.TUTORIAL_SLIDE1_TITLE,
        description: values.TUTORIAL_SLIDE1_DESCRIPTION,
        image: 'assets/img/ica-slidebox-img-1.png',
      },
      {
        title: values.TUTORIAL_SLIDE2_TITLE,
        description: values.TUTORIAL_SLIDE2_DESCRIPTION,
        image: 'assets/img/ica-slidebox-img-2.png',
      },
      {
        title: values.TUTORIAL_SLIDE3_TITLE,
        description: values.TUTORIAL_SLIDE3_DESCRIPTION,
        image: 'assets/img/ica-slidebox-img-3.png',
      }
    ];*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidesPage');
  } 
  
  googleLogin(){
    this.gplus.login({
      'webClientId':'140635668585-42ph815ot6sg8b5frdbpnvo5vnu7bdmi.apps.googleusercontent.com',
      'offline':true
    }).then(data=>{
      console.log('data',data);
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(data.idToken)).then((data2)=>{
        alert('login suc');
        console.log(data2);
      })
    },err=>{
      console.log('err',err);
    })

  }
  loginWithFb(){
    console.log('in fb');
    this.fb.login(['public_profile','email']).then((res:FacebookLoginResponse)=>{

      console.log(res);
      this.fb.api('me?fields=id,name,email,first_name,picture',['public_profile','email']).then(profile =>{
          //this.userData={email: profile['email'],first_name: profile['first_name'],picture: profile['picture_large']['data']['url'],username: profile['name']}
            console.log('profile data',profile);
      });


    },error=>{
      console.log(error);
    });
  }

  // This method is used for navigating to home page for login with Email
  loginWithEmail(){
    this.navCtrl.push(HomePage);
  }

  createAccount(){
    this.navCtrl.push(RegistrationPage);
  }

  
  //  googleLogin(){
  //   this.gplus.login({
  //     'webClientId':'140635668585-42ph815ot6sg8b5frdbpnvo5vnu7bdmi.apps.googleusercontent.com',
  //     'offline':true
  //   }).then(data=>{
  //     console.log('data',data);
  //     firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(data.idToken)).then((data2)=>{
  //       alert('login suc');
  //       console.log(data2);
  //     })
  //   },err=>{
  //     console.log('err',err);
  //   })

  // }
  // loginWithFb(){
  //   console.log('in fb');
  //   this.fb.login(['public_profile','email']).then((res:FacebookLoginResponse)=>{

  //     console.log(res);
  //     this.fb.api('me?fields=id,name,email,first_name,picture',['public_profile','email']).then(profile =>{
  //         //this.userData={email: profile['email'],first_name: profile['first_name'],picture: profile['picture_large']['data']['url'],username: profile['name']}
  //           console.log('profile data',profile);
  //     });


  //   },error=>{
  //     console.log(error);
  //   });
  // }

}
