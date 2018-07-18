import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { URLs } from "../app.urls";
import { Observable, Subscriber } from "rxjs";
import { ApiService } from '../api.service';

@Injectable({
  providedIn: "root"
})
export class AttendanceService {
  constructor(private httpClient: HttpClient, private apiService: ApiService) {}

  logInAttendance(data) {
    return this.apiService.post(URLs["logInAttendance"]["url"], data);
  }

  logOutAttendance(data) {
    return this.apiService.post(URLs["logOutAttendance"]["url"], data);
  }

  fetchLogInInfo() {
    return this.apiService.get(URLs["fetchLogInInfo"]["url"]);
  }
}
