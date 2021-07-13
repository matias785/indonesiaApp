import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
 
@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  private URL = 'http://localhost:3000/api'

  constructor(
    private http: HttpClient
  ) { }

  getTeacher() {
    return this.http.get<any>(this.URL + '/teachers');
  }
  
  getOneTeacher(name: String) {
    return this.http.get<any>(this.URL + '/profile-teacher')
  }
}
