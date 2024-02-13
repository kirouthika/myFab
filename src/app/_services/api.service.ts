import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const url = "http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  addUser(data: {}) {
   return this.http.post(url + "/user/addUser", data);
  }

  getUsers() {
    return this.http.get(url + '/users');  
  }
  
}
