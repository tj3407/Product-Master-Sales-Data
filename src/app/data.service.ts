import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Master } from './master';
import { Sales } from './sales';

@Injectable()
export class DataService {
  records: BehaviorSubject<any[]> = new BehaviorSubject([]);
  sales: BehaviorSubject<any[]> = new BehaviorSubject([]);
  constructor(private _http: Http, private http: HttpClient) { }

  getRecords() {
    this._http.get('/master').subscribe(
      records => this.records.next(records.json()),
      errorResponse => console.log(errorResponse)
    );
  }

  getRecord(id: number): Observable<Master> {
    return this.http.get<Master>(`master/${id}`);
  }

  getSales(id: number): Observable<Sales> {
    return this.http.get<Sales>(`/sales/${id}`);
  }

  createRecord(record: Master): Observable<Master> {
    return this.http.post<Master>(`/master/new`, record);
  }

  createSales(sales: Sales, id: number): Observable<Sales> {
    return this.http.post<Sales>(`/sales/new/${id}`, sales);
  }
  deleteRecord(recID: string): Observable<Master> {
    return this.http.delete<Master>(`master/${recID}`);
  }

  deleteSales(prodID: string): Observable<Sales> {
    return this.http.delete<Sales>(`/sales/${prodID}`);
  }
}
