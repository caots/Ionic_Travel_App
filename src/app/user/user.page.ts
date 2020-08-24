import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  isEdit : boolean = false;
  name : string = 'Tran Sy Cao';
  email : string = 'Honghoang123@gmail.com';
  phone : string = '0948856496';

  constructor(
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  async isEditingFunc(){
    this.isEdit = await !this.isEdit;
    if(!this.isEdit){
      await this.presentToast()
    } 
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
