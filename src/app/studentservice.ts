import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Studentservice {

  url = 'assets/students.json';

  constructor(private http: HttpClient) { }

  getStudents() {
    return this.http.get<any[]>(this.url);
  }

  addStudent(data:any){
    return this.http.post(this.url,data);
  }

}