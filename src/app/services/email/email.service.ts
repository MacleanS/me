import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  // sendEmail(name, email, subject, message) {

  //   console.log('sending email service ::: params', name, email, subject, message)
  //   return this.http.post("http://localhost:3000/api/sendEmail", {params: name, email, subject, message})
  // }
}
