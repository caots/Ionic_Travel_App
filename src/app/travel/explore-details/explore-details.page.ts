import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { TravelService } from './../../services/travel.service'
import { Travel } from '../../interfaces/travel'
import { Subscription } from 'rxjs'

import {AuthService} from './../../services/auth.service'

@Component({
  selector: 'app-explore-details',
  templateUrl: './explore-details.page.html',
  styleUrls: ['./explore-details.page.scss'],
})
export class ExploreDetailsPage implements OnInit {

  travel: Travel = {
    id: 0
  }
  isLoading: boolean = true;
  subcription: Subscription;
  checkLogin: boolean = false

  constructor(
    private activateRouter: ActivatedRoute,
    private router: Router,
    private travelService: TravelService,
    private auth : AuthService
  ) { }

  ngOnInit() {
    this.getTravelById();
    if(this.auth.getUserInfo()){
      this.checkLogin = true;
    }else{
      this.checkLogin = false;
    }
  }

  ngDoCheck(): void {
    if(this.auth.getUserInfo()){
      this.checkLogin = true;
    } else{
      this.checkLogin = false;
    }  
    // console.log(this.checkLogin);
  }

  doRefresh(event) {
    this.getTravelById();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  getTravelById() {
    this.isLoading = true
    this.activateRouter.params.subscribe(
      data => {
        let { id } = data;
        this.subcription = this.travelService.getTravelById(id).subscribe(data => {
          this.travel = data;
          this.isLoading = false
        })
      }
    );
  }

  ngOnDestroy() {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }

  goBack() {
    this.router.navigateByUrl('/travel')
  }

}
