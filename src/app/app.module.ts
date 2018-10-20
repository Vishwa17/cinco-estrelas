import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

// Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
//import { EditprofilePage } from '../pages/editprofile/editprofile';
import { SlidesPage } from './slides/slides';
import { RecoverypasswordPage } from '../pages/recoverypassword/recoverypassword';
import { RecoverypasswordOtpPage } from '../pages/recoverypassword-otp/recoverypassword-otp';
import { RecoverynewpasswordPage } from '../pages/recoverynewpassword/recoverynewpassword';
import { RegistrationPage } from '../pages/registration/registration';
//import { WelcomePage } from '../pages/welcome/welcome';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { Camera } from '@ionic-native/camera';
//import { TranslateModule } from '@ngx-translate/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { GooglePlus } from '@ionic-native/google-plus';
import * as firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook';

const firebaseConfig={
    apiKey: "AIzaSyDCqC5m0P8aFfIaELmyLWKcXaUKGOGL908",
    authDomain: "portugal-8da16.firebaseapp.com",
    databaseURL: "https://portugal-8da16.firebaseio.com",
    projectId: "portugal-8da16",
    storageBucket: "portugal-8da16.appspot.com",
    messagingSenderId: "140635668585"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    SlidesPage,
    HomePage,
    RecoverypasswordPage,
    RecoverypasswordOtpPage,
    RecoverynewpasswordPage,
    RegistrationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    /*TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })*/
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SlidesPage,
    HomePage,
    RecoverypasswordPage,
    RecoverypasswordOtpPage,
    RecoverynewpasswordPage,
    RegistrationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
//    Camera,
    GooglePlus,Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
