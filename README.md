# ionic-3 + OneSignal Notification
notification demo using ionic 3 and OneSignal 


 1) create ionic project
 2) platform add iOS / android
 3) plugin add
  	ionic cordova plugin add onesignal-cordova-plugin
	  npm install --save @ionic-native/onesignal
 4) create app in firebase console then Select Android	
    android -
        Android package name (same as your ionic project “app id” config.xml)
        ex - com.abcd.myapp , 
        io.ionic.starter	
        download google-service.json file and put in main project root. 		
        next to continue REGISTER APP
    make sure your Android package name is same as your  app id (config.xml)

    IOS (optional for Onesignal notification) - 
    		iOS bundle ID (same as your ionic project “app id” config.xml)
    		ex - com.abcd.myapp , io.ionic.starter 		
             Download GoogleService-info.plist and put in iOS platform root folder. 		
             next to continue REGISTER APP. 
￼
 5) after create app in firebase go to “Project Setting” 
 6) go to CLOUD MESSAGING tab 	most important thing is “Legacy server key” and “Sender ID”
 7)  Create One Signal App 	 
      go to App Setting and configure particular platform  	
      select android for CONFIGURE 		
      Google Server API Key = Legacy server key  (from Firebase project) 		
      Google Project Number = Sender ID (from Firebase project)
 8) demo code for push notification (repository). 
 9) go to Onesignal “Notification” tab and generate notification and send it.
 10) get notification to your app.
