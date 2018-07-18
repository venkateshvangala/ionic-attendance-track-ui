import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Device } from '@ionic-native/device';
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'register-home',
  templateUrl: 'register.html'
})
export class RegisterPage {

  public account: object = {
    firstName: '',
    lastName: '',
    emailId: '',
    userName: '',
    password: '',
    phone: ''
  };

  constructor(public navCtrl: NavController, public device: Device, private authService: AuthService) {}

  signup(){
    this.account['userName'] = this.account["emailId"];
    this.authService.signup(this.account).subscribe(
      (response)=> {
        this.navCtrl.setRoot('LoginPage')
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
