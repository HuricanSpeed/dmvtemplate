import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _jsonURL = './data.config.js';

  constructor(private http: HttpClient) { }

  loadData() {
    this.http.get(this._jsonURL).subscribe((res) => {
      return res
    })
  }
}
