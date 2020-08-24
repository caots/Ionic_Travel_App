import { Injectable } from '@angular/core';
import {apiEndPoints} from '../commom/api.config'

import {Observable, BehaviorSubject, of} from 'rxjs'
import { catchError, tap, map } from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'

import {Travel} from '../interfaces/travel'

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor(
    private http : HttpClient
  ) { }

  //get all product
  getAllTravels() {
    let url = apiEndPoints.travel;  
    try{
      return this.http.get(url).pipe(
        map(res => {
          return res;
        })
      )
    }catch(err){
      return of(err)
    }
  }

  // getProductById
  getTravelById(id: number){
    let url = `${apiEndPoints.travel}/${id}`;   
    try{
      return this.http.get(url).pipe(
        map(res => {
          return res;
        })
      )
    }catch(err){
      return of(err)
    } 
  }

  // Handler Error
  handlerError(err){
    if(err.error instanceof Error){
      console.log(`Client-error: ${err.error.message}`);
    }else{
      console.log(`Server-side-error: ${err.status} - ${err.error}`);
    }
  }

}
