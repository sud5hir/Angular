import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  QueryData =
    [
      {
        queryRef: '001',
        queryType: 'General',
        RaisedBy: 'Raju',
        RaisedOn: '01 Aug 2021',
        Status: 'Open'
      },
      {
        queryRef: '002',
        queryType: 'Transactional',
        RaisedBy: 'Mahesh',
        RaisedOn: '01 Aug 2021',
        Status: 'Open'
      },
      {
        queryRef: '003',
        queryType: 'Transactional',
        RaisedBy: 'Ram',
        RaisedOn: '01 Jul 2021',
        Status: 'Closed'
      },
      {
        queryRef: '004',
        queryType: 'Transactional',
        RaisedBy: 'Mohan',
        RaisedOn: '10 Jun 2021',
        Status: 'Closed'
      },
      {
        queryRef: '005',
        queryType: 'General',
        RaisedBy: 'Sanjay',
        RaisedOn: '15 Jan 2021',
        Status: 'Closed'
      },

    ]
  constructor(private _httpClient: HttpClient) { }
  GetQueryData() {
    // Simple GET request with response type <any>
    return this._httpClient.get<any>('https://localhost:5001/api/Query').
      pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError('Something went wrong! in GetQueryData');
        })
      )
  }
  GetQueryDataByRefId(queryRef: string) {
    // Simple GET request with response type <any>
    console.log('https://localhost:5001/api/Query' + 'queryRef/' + queryRef);
    return this._httpClient.get<any>('https://localhost:5001/api/Query/' + queryRef).pipe(
      map((data: any) => {
        console.log("data", data)
        return data;
      }), catchError(error => {
        return throwError('Something went wrong! in GetQueryDataByRefId');
      })
    )
  }

  createQueries(quries: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._httpClient.post(`https://localhost:5001/api/Query/`, quries, httpOptions).pipe(
      map((data: any) => {
        console.log("data", data)
        return data;
      }),
      catchError(error => {
        return throwError('Something went wrong in createQueries!');
      })
    )
  }

  updateQuery(id: string, query: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._httpClient.put(`https://localhost:5001/api/Query/` + id,
      query, httpOptions).
      pipe(
        catchError(error => {
          return throwError('Something went wrong in createQueries!');
        })
      );
  }
  deleteQuery(id: string): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._httpClient.delete<number>(`https://localhost:5001/api/Query/` + id,
      httpOptions).pipe(
        catchError(error => {
          return throwError('Something went wrong in createQueries!');
        })
      );
  }
}
