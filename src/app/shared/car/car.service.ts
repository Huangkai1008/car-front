import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  // 获取所有的cool-cars信息
  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/cars');
  }
}
