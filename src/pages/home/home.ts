import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Device } from '@ionic-native/device';
import { AttendanceService } from '../../services/attendance.service';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  public isPresent: boolean = false;
  public logInInfoList: any = [];

  constructor(
    public navCtrl: NavController,
    public device: Device,
    public geolocation: Geolocation,
    private attendanceService: AttendanceService

  ) {
  }

  ngOnInit(){
    this.fetchLogInInfo();
  }

  onGeoLocationSuccess(geo) {
    const { latitude, longitude }: any = geo.coords;
    var postData: any = { };
    console.log(`Latitude: ${latitude} ===== Lagitude: ${longitude}`);
    if(this.isPresent){
      postData["logInLat"] = latitude;
      postData["logInLag"] = longitude;
      this.attendanceService.logInAttendance(postData).subscribe(
        (response) => {
          this.fetchLogInInfo();
        },
        (error) => console.log(error)
      )
    } else{
      postData["logOutLat"] = latitude;
      postData["logOutLag"] = longitude;
      this.attendanceService.logOutAttendance(postData).subscribe(
        (response) => {
          this.fetchLogInInfo();
        },
        (error) => console.log(error)
      )
    }
  }

  fetchLogInInfo(){
    this.attendanceService.fetchLogInInfo().subscribe(
      (response) => {
        this.logInInfoList = response;
      },
      (error) => console.log(error)
    )
  }

  onGeoLocationError(error){
    console.log(`error in getCurrentPosition(): ${error}`);
  }

  public toggleAttendance(){
    event.cancelable;
    event.preventDefault();
    this.isPresent = !this.isPresent;
    var options = {
      enableHighAccuracy: false,
      maximumAge: 60000,
      timeout: 15000,
    };
    navigator.geolocation.getCurrentPosition(this.onGeoLocationSuccess.bind(this), this.onGeoLocationError.bind(this), options);
  }

}
