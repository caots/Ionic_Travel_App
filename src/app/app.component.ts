import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {AuthService} from './services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  checkLogin : boolean = false;
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth : AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit(){
    if(this.auth.getUserInfo()){
      this.checkLogin = true;
    }else{
      this.checkLogin = false;
    }  
    // console.log(this.checkLogin);  
  }

  ngDoCheck(): void {
    if(this.auth.getUserInfo()){
      this.checkLogin = true;
    } else{
      this.checkLogin = false;
    }  
    // console.log(this.checkLogin);   
  }
}
