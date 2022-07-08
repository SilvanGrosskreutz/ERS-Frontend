import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reimbursement } from '../models/reimbursement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReimService {

  url:string = "http://localhost:8080/reims/";

  constructor(private http:HttpClient) { }

  createReim(reim:Reimbursement):Observable<unknown>{
    return this.http.post(this.url, reim);
  }
}
