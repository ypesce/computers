import { Injectable } from '@angular/core';
import { Computer } from "../computer";
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ComputerServiceService {
  urlApi = 'http://localhost:3000/computers';

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Computer[]> {
    return this.httpClient.get<Computer[]>(this.urlApi).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


}


