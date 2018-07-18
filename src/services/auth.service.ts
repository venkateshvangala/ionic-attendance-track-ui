import { Injectable } from '@angular/core';
import { URLs } from '../app.urls';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService){ }

  signup(user){
    return this.apiService.post(URLs["signup"]["url"], user);
  }

  signin(account){
    return this.apiService.post(URLs["signin"]["url"], account, { responseType: 'text' });
  }
}