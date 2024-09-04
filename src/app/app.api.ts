import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConstant} from './app.constants';

@Injectable({
  providedIn: 'root'
})
export class AppApi {
  BASE_URL = this.appConstant.BASE_URL;
  public options = {};
  public options1 = {};
  public options2 = {};
  public options3 = {};
  public options4 = {};
  public options5 = {};
  public options6 = {};

  constructor(public appConstant: AppConstant) {
    this.initaliseHeaders();
  }

  initaliseHeaders() {
    this.options = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
    this.options1 = {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Accept', 'application/json')};
    this.options2 = {headers: new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'bearer ' + localStorage.getItem('access_token'))};
    this.options3 = {headers: new HttpHeaders().set('Authorization', 'bearer ' + localStorage.getItem('access_token'))};
    this.options4 = {
      headers: new HttpHeaders().set('Authorization', 'bearer ' + localStorage.getItem('access_token')).set('Content-Type', 'application/json').set('Accept', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'),
      responseType: 'blob'
    };
    this.options5 = {
      headers: new HttpHeaders().set('Authorization', 'bearer ' + localStorage.getItem('access_token')).set('Content-Type', 'application/json').set('Accept', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'),
      observe: 'response',
      responseType: 'blob' as 'json'
    };
    this.options6 = {
      headers: new HttpHeaders().set('Authorization', 'bearer ' + localStorage.getItem('access_token')).set('Content-Type', 'application/json').set('Accept', 'application/pdf'),
      observe: 'response',
      responseType: 'blob' as 'json'
    };
  }

  LOGIN = this.BASE_URL + "/login";
  LOGIN_OUT = this.BASE_URL + "/logout";
  GET_PROFILE = this.BASE_URL + "/userview";
  REGISTER = this.BASE_URL + '/register';
  RecipeData = this.BASE_URL + '/recipe/alldata';

}
