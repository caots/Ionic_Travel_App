import { Injectable } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ToastController, Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ShareSocialService {

  constructor(
    private socialSharing: SocialSharing,
    private platform: Platform,
    private toastCtrl: ToastController) {
  }

  share(packageName: string,
    appName: string,
    social: string,
    message: string,
    subject: string,
    image: string,
    url: string) {

    this.platform.ready().then(() => {
      switch (social) {
        case "facebook":
          this.socialSharing
            .canShareVia(
              packageName,
              message,
              subject,
              image,
              url
            )
            .then(() => {
              this.socialSharing
                .shareViaFacebook(message, image, url)
                .catch(err => {
                  this.showSuccesToast(
                    "There was a problem please try later"
                  );
                });
            })
            .catch(err => {
              this.showFailToast(appName);
            });
          break;
        case "instagram":
          this.socialSharing
            .canShareVia(
              packageName,
              message,
              subject,
              image,
              url
            )
            .then(() => {
              this.socialSharing
                .shareViaInstagram(message, image)
                .catch(err => {
                  this.showSuccesToast(
                    "There was a problem please try later"
                  );
                });
            })
            .catch(err => {
              this.showFailToast(appName);
            });
          break;
        case "twitter":
          this.socialSharing
            .canShareVia(
              packageName,
              message,
              subject,
              image,
              url
            )
            .then(() => {
              this.socialSharing
                .shareViaTwitter(message, image, url)
                .catch(err => {
                  this.showSuccesToast(
                    "There was a problem please try later"
                  );
                });
            })
            .catch(err => {
              this.showFailToast(appName);
            });
          break;
        case "gmail":
          this.socialSharing
            .canShareVia(
              packageName,
              message,
              subject,
              image,
              url
            )
            .then(() => {
              this.socialSharing
                .shareViaEmail(message, image, [url])
                .catch(err => {
                  this.showSuccesToast(
                    "There was a problem please try later"
                  );
                });
            })
            .catch(err => {
              this.showFailToast(appName);
            });
          break;
        default:
          this.socialSharing
            .share(message, subject, image, url)
            .catch(err => {
              this.showSuccesToast("There was a problem please try later");
            });
      }

    })
  }

  async showSuccesToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 5000,
      position: 'bottom',
    });
    toast.present();
  }

  async showFailToast(appName: string) {
    const toast = await this.toastCtrl.create({
      message: `${appName} is not installed on your device`,
      duration: 5000,
      position: 'top'
    });
    toast.present();
  }
}
