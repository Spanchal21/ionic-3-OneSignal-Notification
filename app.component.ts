import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen, 
              public alertCtrl: AlertController,
              public _OneSignal :OneSignal) {
      platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      // this.pushsetup();
      this.OneSignalNotification();
    });
  }

 
  OneSignalNotification()
   {
      // Define settings for iOS
      var iosSettings = {};
      iosSettings["kOSSettingsKeyAutoPrompt"] = true;
      iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;


      // Initialise plugin with OneSignal service
      this._OneSignal.startInit('1dd57350-4280-4a6e-af7c-afbf638ef768', '783941661219').iOSSettings(iosSettings);

      // Retrieve the OneSignal user id and the device token
      this._OneSignal.getIds()
      .then((ids) =>
      {
         console.log('getIds: ' + JSON.stringify(ids));
      });


      // When a push notification is received handle
      // how the application will respond
      this._OneSignal.handleNotificationReceived()
      .subscribe((msg) =>
      {
         // Log data received from the push notification service
         console.log('Notification received');
         console.dir(msg);
      });


      // When a push notification is opened by the user
      // handle how the application will respond
      this._OneSignal.handleNotificationOpened()
      .subscribe((msg) =>
      {
         // Log data received from the push notification service
         console.log('Notification opened');
         console.dir(msg);
      });


      // End plugin initialisation
      this._OneSignal.endInit();

   }



  
    
}