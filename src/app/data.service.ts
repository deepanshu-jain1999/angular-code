import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  senddata(file: any) {
    return this.http.post('http://baa228bd.ngrok.io/file/upload/', file );
  }
}
