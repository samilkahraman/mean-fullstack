import { Injectable } from '@angular/core';
import { MasifPaneller } from './masif-paneller';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class Api2Service {

  endpoint: string = 'http://localhost:4000/api2000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Add MP
  AddMP(data: MasifPaneller): Observable<any> {
    let API_URL = `${this.endpoint}/agac-ekle`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all students
  GetMPs() {
    return this.http.get(`${this.endpoint}`);
  }

  // Get student
  GetMP(id): Observable<any> {
    let API_URL = `${this.endpoint}/agac-getir/${id}`;
    return this.http.get(API_URL, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Update student
  UpdateMP(id, data: MasifPaneller): Observable<any> {
    let API_URL = `${this.endpoint}/update-agac/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete student
  DeleteStudent(id): Observable<any> {
    var API_URL = `${this.endpoint}/delete-agac/${id}`;
    return this.http.delete(API_URL).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}