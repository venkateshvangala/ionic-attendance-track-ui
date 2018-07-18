import { NgModule } from '@angular/core';
import { HomePage } from './home';
import { IonicPageModule } from 'ionic-angular';
import { Device } from '@ionic-native/device';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomePage],
  imports: [
    HttpClientModule,
    IonicPageModule.forChild(HomePage)
  ],
  providers:[
    Geolocation,
    Device,
  ]
})
export class HomePModule { }


