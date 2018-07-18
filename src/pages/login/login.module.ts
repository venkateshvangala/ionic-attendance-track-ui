import { NgModule } from '@angular/core';
import { LoginPage } from './login';
import { IonicPageModule } from 'ionic-angular';
import { Device } from '@ionic-native/device';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginPage],
  imports: [
    HttpClientModule,
    IonicPageModule.forChild(LoginPage)
  ],
  providers:[
    Device
  ]
})
export class LoginPModule { }


