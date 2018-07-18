import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import * as _ from 'underscore';


/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = 'http://localhost:8080';
  constructor(public http: HttpClient) { }

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }
    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(this.url + '/' + endpoint, {headers: this.getHeaders()});
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.url + '/' + endpoint, body, _.isEmpty(reqOpts) ? {headers: this.getHeaders()} : reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, _.isEmpty(reqOpts) ? {headers: this.getHeaders()} : reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, _.isEmpty(reqOpts) ? {headers: this.getHeaders()} : reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + '/' + endpoint, body, _.isEmpty(reqOpts) ? {headers: this.getHeaders()} : reqOpts);
  }

  getHeaders(){
    var headers = new HttpHeaders();
    if(localStorage.getItem("user-token"))
    headers = headers.set("Authorization", localStorage.getItem("user-token"))
    return headers;
  }
}
