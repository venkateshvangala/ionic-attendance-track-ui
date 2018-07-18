import { NgModule } from '@angular/core';
import { RegisterPage } from './register';
import { IonicPageModule } from 'ionic-angular';
import { Device } from '@ionic-native/device';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [RegisterPage],
  imports: [
    HttpClientModule,
    IonicPageModule.forChild(RegisterPage)
  ],
  providers:[
    Device
  ]
})
export class RegisterPModule { }


