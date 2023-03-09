import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  url = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(this.url);
  }

  postUsers(data:any){
    return  this.http.post(this.url,data);
  }

}
