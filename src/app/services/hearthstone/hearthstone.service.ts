import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()


export class HearthstoneService {
  constructor(private http: HttpClient) { }

  classCards: Object;

  getByClass(className: string) {
    return this.http.get('http://localhost:3000/api/class/' + className)
  }
}
