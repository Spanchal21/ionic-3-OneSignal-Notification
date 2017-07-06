import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http ,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {LoadingController, Platform ,AlertController, ToastController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
  			  public http: Http, 
              public toastCtrl : ToastController
              ) {
  }

  myFormData = {headings:"",message:""};

//=================== send notification function ===============
  fnSendNotification(){
  	// this.presentToast(JSON.stringify(this.myFormData));

  	if(this.myFormData.headings != '' && this.myFormData.message != ''){
  			let headers = new Headers ({'Content-Type': 'application/json'});
    this.http.post( 'http://api.atozinfoway.in:8082/ci/welcome/sendMessageApi' , JSON.stringify(this.myFormData),{headers:headers})
      .map(res => res.json())
      .subscribe(data => {
        	this.presentToast('notification send successfully');
          this.myFormData = {headings:"",message:""};
      },
      error =>{
        	this.presentToast('notification not send');
      });
  	}else{
  		this.presentToast('header and message is required');
  	}
  	
  }

//================ tost message function ===============
  presentToast(msg) {
      let toast = this.toastCtrl.create({
          message: msg,
          duration: 3000,
          position: 'botton'
      });
      toast.present();
    }


}
