import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Device } from '@ionic-native/device';
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'login-home',
  templateUrl: 'login.html'
})
export class LoginPage {
  public account: object = {
    userName: '',
    password: ''
  }

  constructor(
    public navCtrl: NavController,
    public device: Device,
    private authService: AuthService
  ) { }

  login(){
    this.authService.signin(this["account"]).subscribe(
      (response) => {
        localStorage.setItem("user-token", `Bearer ${response}`);
        this.navCtrl.setRoot('HomePage');
      },
      (error) => { console.log(`error in login: ${error}`) }
    )
  }

  register(){
    this.navCtrl.setRoot('RegisterPage')
  }
}
