import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()


export class HearthstoneService {
  constructor(private http: HttpClient) { }

  getAllCardInfo() {
    return this.http.get("http://localhost:3000/api/cardInfo")
  }

  getFilteredCards(params) {

    return this.http.get("http://localhost:3000/api/card", {params: params})
  }

  getByClass(className: string, params) {
    return this.http.get('http://localhost:3000/api/class/' + className, {params: params})
  }

  getByType(type: string) {
    return this.http.get('http://localhost:3000/api/type/' + type)
  }
}
