import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
// import { CallNumber } from '@ionic-native/call-number/ngx';
// import { Contacts } from '@ionic-native/contacts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(
    private router: Router,
    // public callNumber: CallNumber
  ) { }

  ngOnInit() {
  }

  callNow(number) {
    // console.log(number);
    
    // this.callNumber.callNumber(number, true)
    //   .then(res => console.log('Launched dialer!', res))
    //   .catch(err => console.log('Error launching dialer', err));

    //href = "tel: xxxx xxx xxx"
    window.location.href=`tel: ${number}`
  }

  goBack() {
    this.router.navigateByUrl('/travel')
  }

}
