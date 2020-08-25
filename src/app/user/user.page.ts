import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {AuthService} from './../services/auth.service'
import {IUser} from './../interfaces/user'

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  isEdit : boolean = false;
  name : string = 'Tran Sy Cao';
  email : string ="exm@gmail.com";
  phone : string = '0948856496';

  constructor(
    private toastController: ToastController,
    private auth : AuthService
  ) { }

  ngOnInit() {    
    this.email = this.auth.getUserInfo().email;
  }

  async isEditingFunc(){
    this.isEdit = await !this.isEdit;
    if(!this.isEdit){
      await this.presentToast()
    } 
  }

  logout(){
    this.auth.logOut()

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000,
      color: 'dark',
    });
    toast.present();
  }

}
