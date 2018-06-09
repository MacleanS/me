import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()


export class HearthstoneService {
  constructor(private http: HttpClient) { }

  getAllCardInfo() {
    return this.http.get("/api/cardInfo")
  }

  getFilteredCards(params) {
    return this.http.get("/api/card", {params: params})
  }
  getByClass(className: string, params) {
    return this.http.get('/api/class/' + className, {params: params})
  }

  getByType(type: string) {
    return this.http.get('/api/type/' + type)
  }
}
